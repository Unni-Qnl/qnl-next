"use client";

import banner from "@/assets/whoweare/who-we-are-bg.webp";
import bluredBanner from "@/assets/whoweare/blured-who-we-are-bg.webp";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {};

export default function WhoWeAreDescription({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible
          ? `url(${banner.src})`
          : `url(${bluredBanner.src})`,
        borderImage:
          "fill 0 linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))",
      }}
      className="py-[0.785rem] md:py-0 md:h-[27rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[54rem] 3xl:h-[67.5rem] grid items-center bg-no-repeat bg-cover bg-center px-[2.198rem] md:px-[5rem] lg:px-[6.666rem] xl:px-[8.333rem] 2xl:px-[10rem] 3xl:px-[12.5rem]"
    >
      <div className="md:w-[28.8rem] lg:w-[38.4rem] xl:w-[48rem] 2xl:w-[57.6rem] 3xl:w-[72rem]">
        <h4 className="content-title">Who We Are</h4>
        <div className="content-para">
          <p>
            QNL Software is a next-generation consulting and technology firm
            committed to redefining how businesses leverage digital innovation.
            Founded on the principle that technology must enable real-world
            outcomes, we partner with organizations across industries to deliver
            solutions that are strategic, scalable, and sustainable.
          </p>
          <p>
            Our culture is built on collaboration, integrity, and relentless
            pursuit of excellence. We believe in empowering clients, inspiring
            teams, and building partnerships that go beyond traditional vendor
            relationships. At QNL, your challenges become our mission.
          </p>
        </div>
      </div>
    </div>
  );
}
