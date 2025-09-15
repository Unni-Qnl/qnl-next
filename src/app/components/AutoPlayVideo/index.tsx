"use client";

import { qnl_video } from "@/constants";
import Button from "@/core/components/Button";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import coverImg from "@/assets/home/video-cover-img.webp";

type Props = {};

export default function AutoPlayVideo({}: Props) {
  const inViewRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(inViewRef, { once: false, amount: 0.5 });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    if (!isInView) {
      const video = videoRef.current;
      if (video) {
        video?.pause();
      }
      setPlay(false);
    }
  }, [isInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (isPlay && video) {
      video.play().catch((e) => console.log("Play prevented", e));
    }
  }, [isPlay]);

  return (
    <div
      ref={inViewRef}
      className="relative mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem] h-[11.946rem] md:h-[18.25rem] lg:h-[24.333rem] xl:h-[30.417rem] 2xl:h-[36.5rem] 3xl:h-[45.625rem]"
    >
      <div
        style={{ backgroundImage: `url(${coverImg.src})` }}
        className={`absolute inset-0 bg-black bg-cover bg-center transition-opacity duration-500 ease-in-out ${isPlay ? "opacity-0" : "opacity-100 z-50"}`}
      >
        <div className="w-full h-full relative grid place-items-center text-center">
          <div>
            <p className="font-extralight text-primary text-[12px] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
              Beyond
            </p>
            <p className="font-light text-[1rem] md:text-[1.35rem] lg:text-[1.8rem] xl:text-[2.25rem] 2xl:text-[2.7rem] 3xl:text-[3.375rem] bg-gradient-to-l from-white to-[#FF3300] bg-clip-text text-transparent">
              Innovation
            </p>
          </div>
          <Button
            onClick={() => setPlay(true)}
            className="bg-transparent absolute bottom-4 right-4 border border-primary"
          >
            Play Video
          </Button>
        </div>
      </div>

      <video
        ref={videoRef}
        key="video"
        controls={isPlay}
        className="w-full h-full object-cover relative"
        style={{
          objectFit: "cover",
          maxWidth: "100%",
          height: "100%",
        }}
        // muted
        playsInline
      >
        <source src={qnl_video} type="video/mp4" />
      </video>
    </div>
  );
}
