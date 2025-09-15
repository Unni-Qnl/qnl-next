"use client";

import buildFuture from "@/assets/career/build-future.webp";
import bluredBuildFuture from "@/assets/career/blured-build-future.webp";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {};

export default function BuildingFuture({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLImageElement>();
  return (
    <div className="container my-8 md:my-0 md:mt-[2rem] lg:mt-[2.667rem] xl:mt-[3.333rem] 2xl:mt-[4rem] 3xl:mt-[5rem]">
      <div>
        <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          How We Build the Future
        </h4>
        <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-4">
          At QNL, we don’t just follow trends — we shape them. By blending
          cutting-edge technology, user-first design, and cross-functional
          collaboration, we engineer digital solutions that solve real problems
          and move industries forward.
        </p>
      </div>
      <div className="mt-3.5 md:mt-[1.4rem] lg:mt-[1.867rem] xl:mt-[2.333rem] 2xl:mt-[2.8rem] 3xl:mt-[3.5rem] h-[12.5rem] md:h-[16.4rem] lg:h-[21.867rem] xl:h-[27.333rem] 2xl:h-[32.8rem] 3xl:h-[41rem]">
        <img
          ref={ref}
          className="w-full h-full object-cover"
          src={isVisible ? buildFuture.src : bluredBuildFuture.src}
          alt="build-future"
          loading="lazy"
        />
      </div>
    </div>
  );
}
