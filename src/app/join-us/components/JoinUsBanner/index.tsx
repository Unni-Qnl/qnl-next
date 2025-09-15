"use client";

import contacusBanner from "@/assets/contactus/contact-us-banner.webp";
import bluredContacusBanner from "@/assets/contactus/blured-contact-us-banner.webp";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";
import Navbar from "@/core/components/Navbar";
import Breadcrumb from "@/ui/Breadcrumb";

export default function JoinUsBanner() {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible
          ? `url(${contacusBanner.src})`
          : `url(${bluredContacusBanner.src})`,
      }}
      className="md:h-[27rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[54rem] 3xl:h-[67.5rem] bg-cover bg-no-repeat w-full bg-center relative"
    >
      <Navbar />
      <div className='before:bg-[linear-gradient(90deg,#000_28.54%,rgba(0,0,0,0.94)_47.08%,rgba(0,0,0,0.1)_100%),linear-gradient(90.62deg,rgba(255,51,0,0)_45.65%,rgba(255,51,0,0.3)_99.47%)] h-full inset-0 before:absolute before:inset-0 before:content-[""]'>
        <div className="isolate">
          <div className="container py-[3.121rem] md:py-[1.025rem] lg:py-[1.366rem] xl:py-[1.708rem] 2xl:py-[2.05rem] 3xl:py-[2.56rem]">
            <Breadcrumb />
            <div className="mt-4 md:w-[25.7rem] lg:w-[34.266rem] xl:w-[42.833rem] 2xl:w-[51.4rem] 3xl:w-[64.25rem]">
              <h1 className="text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem] leading-snug">
                Let’s Build What’s Next—Together
              </h1>
              <p className="font-normal text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.166rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[0.8rem] lg:mt-[1.066rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]">
                Whether you’re exploring partnership opportunities, need a
                tailored tech solution, or simply want to start a
                conversation—our team is here to listen, guide, and collaborate.
                Reach out to shape the future of innovation with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
