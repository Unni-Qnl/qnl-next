"use client";

import backgroundImage from "@/assets/harmony/designed-for-scale.webp";
import bluredBackgroundImage from "@/assets/harmony/blured-designed-for-scale.png";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {};

export default function DesignedForScale({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible
          ? `url(${backgroundImage.src})`
          : `url(${bluredBackgroundImage.src})`,
      }}
      className="bg-no-repeat bg-cover bg-center w-full lg:h-screen"
    >
      <div className="w-full h-full bg-black/80 py-[2.255rem] lg:py-0">
        <div className="container w-full h-full grid items-center">
          <div>
            <h4 className="font-semibold text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
              Designed for Scale, Built for Results
            </h4>
            <ul className="mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem] text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] list-disc pl-4">
              <li>
                Strategic Advisory Model — Digital audit + roadmap + governance
              </li>
              <li>
                Embedded Digital Teams — MarTech + media + content integration
              </li>
              <li>
                Hybrid Execution Model — QNL Harmony works with your internal
                marketing or IT team
              </li>
              <li>
                Managed Services — End-to-end management of campaigns, reports,
                creatives, and data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
