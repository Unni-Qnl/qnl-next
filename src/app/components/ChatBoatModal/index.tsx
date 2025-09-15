"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import chatboat from "@/assets/home/chat-bot-giff.gif";

type Props = {
  handleClose: (open: boolean) => void;
  isOpen: boolean;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  isLoading: boolean;
  displayedText: string;
  displayQuestion: string;
  handleSend: (e: FormEvent<HTMLFormElement>) => void;
  question: string;
  setQuestion: (value: React.SetStateAction<string>) => void;
};

export default function ChatBoatModal({
  displayQuestion,
  displayedText,
  handleClose,
  handleSend,
  isLoading,
  isOpen,
  question,
  scrollRef,
  setQuestion,
  titleRef,
}: Props) {
  return (
    <Dialog onOpenChange={(open) => handleClose(open)} open={isOpen}>
      <DialogContent className="fullscreen-dialog sm:w-[96%] md:w-full rounded-none border-none bg-[#0C0A08] h-[100dvh] overflow-hidden">
        <div className="mx-auto flex flex-col my-4 md:my-[2rem] lg:my-[2.667rem] xl:my-[3.333rem] 2xl:my-[4rem] 3xl:my-[5rem] w-full max-w-[100%] md:max-w-[28rem] lg:max-w-[37.333rem] xl:max-w-[46.667rem] 2xl:max-w-[56rem] 3xl:max-w-[70rem]">
          <div className="flex-1">
            <div className="flex items-center gap-1 md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]">
              <img
                src={chatboat?.src}
                alt="chatboat"
                className="size-6 md:size-[1rem] lg:size-[1.333rem] xl:size-[1.667rem] 2xl:size-[2rem] 3xl:size-[2.5rem]"
              />
              <DialogTitle
                ref={titleRef}
                className="text-[1rem] md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]"
              >
                {displayQuestion}
              </DialogTitle>
            </div>

            <div
              ref={scrollRef}
              data-lenis-prevent
              className="scrollbar-hidden mt-4 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem] flex-1 max-h-[74svh] md:max-h-[68svh] overflow-y-auto mb-4"
            >
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
          <DialogDescription hidden />
          <div className="bg-[linear-gradient(91.54deg,#646464_-5.15%,#FFFFFF_103.02%)] p-[1px] rounded-[24.69px] md:rounded-[1rem] lg:rounded-[1.333rem] xl:rounded-[1.667rem] 2xl:rounded-[2rem] 3xl:rounded-[2.5rem] overflow-hidden">
            <form
              onSubmit={handleSend}
              className="flex items-center bg-[#646464] p-2 md:px-[0.4rem] lg:px-[0.533rem] xl:px-[0.667rem] 2xl:px-[0.8rem] 3xl:px-[1rem] md:py-[0.45rem] lg:py-[0.6rem] xl:py-[0.75rem] 2xl:py-[0.9rem] 3xl:py-[1.125rem] rounded-full"
            >
              <input
                type="text"
                placeholder="What would you like to know?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onFocus={() => {
                  // ✅ Optional: Scroll to top on focus if needed
                  document
                    .querySelector("[data-lenis-prevent]")
                    ?.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border-none text-white flex-1 outline-none text-[10px] md:text-[0.425rem] lg:text-[0.567rem] xl:text-[0.708rem] 2xl:text-[0.85rem] 3xl:text-[1.063rem]"
              />
              <button
                disabled={!question}
                type="submit"
                className="cursor-pointer size-3.5 md:size-[0.6rem] lg:size-[0.8rem] xl:size-[1rem] 2xl:size-[1.2rem] 3xl:size-[1.5rem]"
              >
                <Send color="#ff3300" strokeWidth={1.5} size={"100% "} />
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
