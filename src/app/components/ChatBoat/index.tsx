"use client";

import { useLazyBackground } from "@/core/hooks/useLazyBackground";
import { Search } from "lucide-react";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import chatboat from "@/assets/home/chat-bot-giff.gif";
import bluredChatboat from "@/assets/home/blured-chatboat-giff.webp";
import { useMediaQuery } from "@/core/hooks/useMediaQuery";
import { SOCKET_URL } from "@/constants";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";
import ChatBoatModal from "../ChatBoatModal";

type Props = {};

const speed = 30;

export default function ChatBoat({}: Props) {
  const { ref, isVisible } = useLazyBackground<HTMLImageElement>();
  const [question, setQuestion] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState("");
  const [displayQuestion, setDisplayQuestion] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const router = useRouter();

  /**
   * Sends a message via WebSocket if connection is open.
   * Updates the dialog title with the question and clears the input.
   */
  const sendMessage = (message: string) => {
    try {
      if (
        socketRef.current &&
        socketRef.current.readyState === WebSocket.OPEN
      ) {
        socketRef.current.send(message);
        setDisplayQuestion(message);
        if (titleRef.current) {
          titleRef.current.innerText = message;
        }
        setQuestion("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Establish WebSocket connection on mount.
   * Sets up event listeners for open, message, error, and close events.
   * Cleans up by closing the socket on unmount.
   */
  useEffect(() => {
    let socket: WebSocket;
    let reconnectTimer: NodeJS.Timeout;
    const RECONNECT_INTERVAL = 3000; // 3 seconds
    const MAX_RETRIES = 5;
    let retryCount = 0;

    const connect = () => {
      socket = new WebSocket(SOCKET_URL);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log("✅ WebSocket connected");
        retryCount = 0; // reset on successful connect
      };

      socket.onmessage = (event: MessageEvent) => {
        try {
          const parsedData: { answer: string } = JSON.parse(event.data);
          setMessage(parsedData.answer);
        } catch (error) {
          console.error("❌ Invalid JSON from server:", error);
        } finally {
          setIsLoading(false);
        }
      };

      socket.onerror = (error) => {
        console.error("⚠️ WebSocket error:", error);
      };

      socket.onclose = (event) => {
        console.log("🔌 WebSocket closed", event.code, event.reason);
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          reconnectTimer = setTimeout(connect, RECONNECT_INTERVAL);
        }
      };
    };

    connect();

    return () => {
      clearTimeout(reconnectTimer);
      socket.close();
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [displayedText, isLoading]);

  /**
   * Handles form submit in the modal dialog.
   * Sends the user's question via WebSocket with loading state.
   */
  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      sendMessage(question);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  /**
   * When a suggestion is clicked, sets it as question,
   * opens modal and sends the message after slight delay.
   */
  const handleSuggestionClick = (suggestion: string) => {
    setQuestion(suggestion);
    setIsOpen(true);
    setIsLoading(true);

    // Wait for modal to open, then send the suggestion
    setTimeout(() => {
      try {
        sendMessage(suggestion);
      } catch (error) {
        console.error("Error sending suggestion:", error);
      } finally {
        setIsLoading(false);
      }
    }, 100); // slight delay to ensure modal is open
  };

  /**
   * Handles search button click in the main UI (outside modal).
   * Opens modal and sends the question with loading state.
   */
  const handleSearchClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question) return;
    setIsLoading(true);

    setTimeout(() => {
      try {
        if (isMobile) {
          router.push(`${appRoutes.aivyChat}/${question}`);
        } else {
          setIsOpen(true);
          sendMessage(question);
        }
      } catch (error) {
        console.error("Error sending question:", error);
      } finally {
        setIsLoading(false);
      }
    }, 100);
  };

  /**
   * Handles modal open/close.
   * Clears the question, message, and title when closed.
   */
  const handleClose = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // When modal closes, clear everything
      setQuestion("");
      setMessage("");
      if (titleRef.current) {
        titleRef.current.innerText = "";
      }
    }
  };

  useEffect(() => {
    if (!message) return; // no message to display

    setDisplayedText(""); // reset displayed text on new message
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + message.charAt(index));
      index++;
      if (index >= message.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed]);

  return (
    <>
      <div className="bg-[#7C5F4F1A] h-[386px] md:h-auto order-1 rounded-[9.88px] md:mr-[2.6rem] lg:mr-[3.467rem] xl:mr-[4.333rem] 2xl:mr-[5.2rem] 3xl:mr-[6.5rem] p-8 md:px-[1.2rem] lg:px-[1.6rem] xl:px-[2rem] 2xl:px-[2.4rem] 3xl:px-[3rem] md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem] md:order-2 mx-8 md:w-[14.825rem] lg:w-[19.767rem] xl:w-[24.708rem] 2xl:w-[29.65rem] 3xl:w-[37.063rem]">
        <div>
          <p className="text-center text-[12px] md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
            Have any questions ?
          </p>
          <h4 className="text-center font-light mt-1 text-2xl md:text-[1.05rem] lg:text-[1.4rem] xl:text-[1.75rem] 2xl:text-[2.1rem] 3xl:text-[2.625rem]">
            <span className="text-primary">AIvy</span> will answer you
          </h4>

          <div className="grid place-items-center my-4 md:my-[0.68rem] lg:my-[0.906rem] xl:my-[1.133rem] 2xl:my-[1.36rem] 3xl:my-[1.699rem]">
            <img
              ref={ref}
              src={isVisible ? chatboat.src : bluredChatboat?.src}
              alt="chat-boat"
              loading="lazy"
              className="mix-blend-difference rounded-full size-[63.57px] md:size-[2.575rem] lg:size-[3.433rem] xl:size-[4.292rem] 2xl:size-[5.15rem] 3xl:size-[6.438rem]"
            />
          </div>

          <div className="bg-[linear-gradient(91.54deg,#646464_-5.15%,#FFFFFF_103.02%)] p-[1px] rounded-[24.69px] md:rounded-[1rem] lg:rounded-[1.333rem] xl:rounded-[1.667rem] 2xl:rounded-[2rem] 3xl:rounded-[2.5rem] overflow-hidden">
            <form
              onSubmit={handleSearchClick}
              className="flex items-center bg-[#646464] p-2 md:px-[0.4rem] lg:px-[0.533rem] xl:px-[0.667rem] 2xl:px-[0.8rem] 3xl:px-[1rem] md:py-[0.45rem] lg:py-[0.6rem] xl:py-[0.75rem] 2xl:py-[0.9rem] 3xl:py-[1.125rem] rounded-full"
            >
              <input
                type="text"
                placeholder="What would you like to know?"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  setDisplayQuestion(e.target.value);
                }}
                className="border-none flex-1 outline-none text-[10px] md:text-[0.425rem] lg:text-[0.567rem] xl:text-[0.708rem] 2xl:text-[0.85rem] 3xl:text-[1.063rem]"
              />
              <button
                disabled={!question}
                type="submit"
                className="cursor-pointer size-3.5 md:size-[0.6rem] lg:size-[0.8rem] xl:size-[1rem] 2xl:size-[1.2rem] 3xl:size-[1.5rem]"
              >
                <Search size={"100%"} color="#FF3300" />
              </button>
            </form>
          </div>

          <div className="mt-6 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
            <p className="font-bold text-[#9C9C9C] md:text-[0.4rem] lg:text-[0.533rem] xl:text-[0.667rem] 2xl:text-[0.8rem] 3xl:text-[1rem]">
              Suggestions
            </p>
            <div className="mt-4 md:mt-[0.75rem] lg:mt-[1rem] xl:mt-[1.25rem] 2xl:mt-[1.5rem] 3xl:mt-[1.875rem] grid md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]">
              <p
                onClick={() =>
                  isMobile
                    ? router.push(
                        `${appRoutes.aivyChat}/What industries does QNL specialize in`,
                      )
                    : handleSuggestionClick(
                        "What industries does QNL specialize in",
                      )
                }
                className="cursor-pointer text-[12px] md:text-[0.425rem] lg:text-[0.567rem] xl:text-[0.708rem] 2xl:text-[0.85rem] 3xl:text-[1.063rem] md:pt-[0.4rem] lg:pt-[0.533rem] xl:pt-[0.667rem] 2xl:pt-[0.8rem] 3xl:pt-[1rem] pb-3.5 md:pb-[0.6rem] lg:pb-[0.8rem] xl:pb-[1rem] 2xl:pb-[1.2rem] 3xl:pb-[1.5rem] border-b-[1px] border-b-[#3D3D3D]"
              >
                What industries does QNL specialize in ?
              </p>
              <p
                onClick={() =>
                  isMobile
                    ? router.push(
                        `${appRoutes.aivyChat}/What are the career opportunities at QNL?`,
                      )
                    : handleSuggestionClick(
                        "What are the career opportunities at QNL?",
                      )
                }
                className="cursor-pointer text-[12px] md:text-[0.425rem] lg:text-[0.567rem] xl:text-[0.708rem] 2xl:text-[0.85rem] 3xl:text-[1.063rem] pt-[9px] md:pt-[0.4rem] lg:pt-[0.533rem] xl:pt-[0.667rem] 2xl:pt-[0.8rem] 3xl:pt-[1rem] pb-3.5 md:pb-[0.6rem] lg:pb-[0.8rem] xl:pb-[1rem] 2xl:pb-[1.2rem] 3xl:pb-[1.5rem] border-b-[1px] border-b-[#3D3D3D]"
              >
                What are the career opportunities at QNL ?
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChatBoatModal
        displayedText={displayedText}
        handleClose={handleClose}
        handleSend={handleSend}
        isLoading={isLoading}
        isOpen={isOpen}
        question={question}
        scrollRef={scrollRef}
        setQuestion={setQuestion}
        titleRef={titleRef}
        displayQuestion={displayQuestion}
      />
    </>
  );
}
