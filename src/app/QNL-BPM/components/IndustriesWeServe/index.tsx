"use client";

import { QNL_BPM_INDUSTRIES_WE_SERVE } from "@/app/QNL-BPM/data";

type Props = {};

export default function IndustriesWeServe({}: Props) {
  return (
    <div className="container">
      <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
        Industries We Serve
        <div className="mt-10 0.875 grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
          {QNL_BPM_INDUSTRIES_WE_SERVE?.map((item) => (
            <div
              key={item?.id}
              className="flex items-center gap-4 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]"
            >
              <img
                className="block size-[3.125rem] md:size-[2.5rem] lg:size-[3.333rem] xl:size-[4.167rem] 2xl:size-[5rem] 3xl:size-[6.25rem] object-cover"
                src={item?.icon}
                alt={item?.title}
                loading="lazy"
              />
              <p className="font-normal text-[0.875rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </h4>
    </div>
  );
}
