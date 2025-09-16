"use client";

import { useParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import chatboat from "@/assets/home/chat-bot-giff.gif";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Props = {};

const speed = 30;

export default function AivyChatBot({}: Props) {
  const { id } = useParams();

  const question = decodeURIComponent(String(id));

  console.log("question", decodeURIComponent(String(question)));

  const [userQuestion, setUserQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState("");
  const [message, setMessage] = useState<string>("");

  const [isSocketReady, setIsSocketReady] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  /**
   * Sends a message via WebSocket if connection is open.
   * Updates the dialog title with the question and clears the input.
   */
  const sendMessage = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
      if (titleRef.current) {
        titleRef.current.innerText = message;
      }
      setUserQuestion("");
    } else {
      console.error("WebSocket is not open");
    }
  };

  /**
   * Establish WebSocket connection on mount.
   * Sets up event listeners for open, message, error, and close events.
   * Cleans up by closing the socket on unmount.
   */
  useEffect(() => {
    const socket = new WebSocket("wss://ai.qnlsoftware.com/");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
      setIsSocketReady(true);
    };

    socket.onmessage = (event: MessageEvent) => {
      const data = event.data;
      try {
        const parsedData: { answer: string } = JSON.parse(data);
        setMessage(parsedData.answer);
      } catch (error) {
        console.error("Invalid JSON from server:", error);
      } finally {
        setIsLoading(false); // ✅ Stop loading after response arrives
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    // Cleanup on unmount
    return () => {
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
      sendMessage(userQuestion);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!message) return; // no message to display

    setDisplayedText(message.charAt(0)); // reset displayed text on new message
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

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerText = String(question);
    }
  }, [question]);

  useEffect(() => {
    if (isSocketReady && question) {
      setIsLoading(true);
      sendMessage(String(question));
    }
  }, [isSocketReady, question]);

  return (
    <div
      style={{
        display: "grid",
        margin: 0,
        height: "100dvh",
        gridTemplate: `
"messages" 1fr
"input" auto
"keyboard" env(keyboard-inset-height, 0px)
`,
      }}
    >
      <div className="overflow-y-auto p-4">
        <div>
          <div className="flex items-center gap-1 md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]">
            <img
              src={chatboat.src}
              alt="chatboat"
              className="size-6 md:size-[1rem] lg:size-[1.333rem] xl:size-[1.667rem] 2xl:size-[2rem] 3xl:size-[2.5rem]"
            />
            <p
              ref={titleRef}
              className="text-[1rem] md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]"
            />
          </div>
          <div className="py-6">
            {isLoading ? (
              <div className="w-full">
                <div className="flex items-center space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 bg-gray-500 rounded-full"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[12px] md:text-[0.525rem] lg:text-[0.7rem] xl:text-[0.875rem] 2xl:text-[1.05rem] 3xl:text-[1.313rem]"
              >
                {displayedText}
              </motion.span>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="bg-[linear-gradient(91.54deg,#646464_-5.15%,#FFFFFF_103.02%)] p-[1px] rounded-[24.69px] md:rounded-[1rem] lg:rounded-[1.333rem] xl:rounded-[1.667rem] 2xl:rounded-[2rem] 3xl:rounded-[2.5rem] overflow-hidden">
          <form
            onSubmit={handleSend}
            className="flex items-center bg-[#646464] p-2 md:px-[0.4rem] lg:px-[0.533rem] xl:px-[0.667rem] 2xl:px-[0.8rem] 3xl:px-[1rem] md:py-[0.45rem] lg:py-[0.6rem] xl:py-[0.75rem] 2xl:py-[0.9rem] 3xl:py-[1.125rem] rounded-full"
          >
            <input
              type="text"
              placeholder="What would you like to know?"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              onFocus={() => {
                // ✅ Optional: Scroll to top on focus if needed
                document
                  .querySelector("[data-lenis-prevent]")
                  ?.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border-none text-white flex-1 outline-none text-[10px] md:text-[0.425rem] lg:text-[0.567rem] xl:text-[0.708rem] 2xl:text-[0.85rem] 3xl:text-[1.063rem]"
            />
            <button
              disabled={!userQuestion}
              type="submit"
              className="cursor-pointer size-3.5 md:size-[0.6rem] lg:size-[0.8rem] xl:size-[1rem] 2xl:size-[1.2rem] 3xl:size-[1.5rem]"
            >
              <Send color="#ff3300" strokeWidth={1.5} size={"100% "} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
