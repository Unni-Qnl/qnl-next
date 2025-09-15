"use client";

import { WHY_CHOOSE_QNE_BPM } from "@/app/QNL-BPM/data";

type Props = {};

export default function WhyChooseQnlBpm({}: Props) {
  return (
    <div className="my-8 md:my-[2.6rem] lg:my-[3.467rem] xl:my-[4.333rem] 2xl:my-[5.2rem] 3xl:my-[6.5rem] bg-white">
      <div className="container py-6 md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem] text-black">
        <h4 className="font-semibold text-[1rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
          Why Choose QNL BPM
        </h4>
        <div className="grid md:grid-cols-2 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem] mt-1 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
          {WHY_CHOOSE_QNE_BPM?.map((data, index) => (
            <div
              key={data?.id}
              className="flex items-center gap-2 md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]"
            >
              <h2 className="font-semibold text-[#FF330033] text-[3.125rem] md:text-[2.5rem] lg:text-[3.333rem] xl:text-[4.167rem] 2xl:text-[5rem] 3xl:text-[6.25rem]">
                {index + 1}
              </h2>
              <div>
                <h5 className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                  {data?.title}
                </h5>
                <p className="text-[0.5rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] mt-0.5 md:mt-[0.2rem] lg:mt-[0.267rem] xl:mt-[0.333rem] 2xl:mt-[0.4rem] 3xl:mt-[0.5rem]">
                  {data?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
