"use client";

import businessImpact from "@/assets/whoweare/business-impact.webp";
import bluredBusinessImpact from "@/assets/whoweare/blured-business-impact.webp";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {};

export default function BusinessImpact({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLImageElement>();
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-[0.813rem] md:gap-[1.4rem] lg:gap-[1.866rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem] items-center my-8 md:my-[2.85rem] lg:my-[3.8rem] xl:my-[4.75rem] 2xl:my-[5.7rem] 3xl:my-[7.125rem]">
      <div>
        <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          Building Beyond Software. Delivering Business Impact.
        </h4>
        <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.166rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.666rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
          At QNL Software, we don’t just build software — we engineer
          comprehensive business solutions that drive transformation and growth.
          Our unique blend of strategic consulting and technology expertise
          empowers enterprises to solve complex challenges, innovate faster, and
          scale with confidence.
        </p>
      </div>
      <div className="h-[10rem] md:h-[12.3rem] lg:h-[16.4rem] xl:h-[20.5rem] 2xl:h-[24.6rem] 3xl:h-[30.75rem] overflow-hidden">
        <img
          ref={ref}
          src={isVisible ? businessImpact.src : bluredBusinessImpact.src}
          loading="lazy"
          alt="image-1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
