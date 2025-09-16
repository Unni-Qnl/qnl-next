"use client";

import Button from "@/core/components/Button";
import Navbar from "@/core/components/Navbar";
import bannerGiff from "@/assets/home/background-giff.gif";
import ChatBoat from "../ChatBoat";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";

type Props = {};

export default function HomeBanner({}: Props) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="md:h-[24.188rem] lg:h-[32.25rem] xl:h-[40.313rem] 2xl:h-[48.375rem] 3xl:h-[60.469rem] flex flex-col md:flex-row gap-8 md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
        <div
          className="md:flex-1 order-2 md:order-1 h-full bg-no-repeat bg-contain md:bg-cover"
          style={{ backgroundImage: `url(${bannerGiff.src})` }}
        >
          <div className="w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%),linear-gradient(237.21deg,#000_1.86%,rgba(0,0,0,0)_31.62%),linear-gradient(89.67deg,rgba(0,0,0,0)_62.58%,#000_99.82%),linear-gradient(180deg,rgba(0,0,0,0)_71.1%,#000_100%)] py-5 md:py-[4.35rem] lg:py-[5.8rem] xl:py-[7.25rem] 2xl:py-[8.7rem] 3xl:py-[10.875rem] px-8 md:px-[2.75rem] lg:px-[3.667rem] xl:px-[4.583rem] 2xl:px-[5.5rem] 3xl:px-[6.875rem]">
            <div>
              <h1 className="text-2xl md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem]">
                Build Beyond
              </h1>
              <div className="mt-2 md:mt-[2.6rem] lg:mt-[3.467rem] xl:mt-[4.333rem] 2xl:mt-[5.2rem] 3xl:mt-[6.5rem]">
                <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                  The ideas you imagine, the systems you run, the businesses you
                  grow, the customers you serve, the products you launch, the
                  processes you simplify, the teams you empower — together, we
                  build more than software.
                </p>
                <p className="font-semibold text-[1rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem] mt-1 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]">
                  We build possibilities. We build impact. We build beyond.
                </p>
                <Button
                  onClick={() => router.push(appRoutes.learnMore)}
                  className="mt-4 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ChatBoat />
      </div>
    </>
  );
}
