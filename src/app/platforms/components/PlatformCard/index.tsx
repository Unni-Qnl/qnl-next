"use client";

import { openInNewTab } from "@/utils";
import { TPlatform } from "../../page";

type Props = {
  data: TPlatform;
};

export default function PlatformCard({ data }: Props) {
  return (
    <div className="grid gap-4 md:gap-0 md:grid-cols-2 md:py-[2rem] lg:py-[2.667rem] xl:py-[3.333rem] 2xl:py-[4rem] 3xl:py-[5rem]">
      <div className="overflow-hidden grid order-2 md:order-1 h-[160px] md:h-[11.175rem] lg:h-[14.9rem] xl:h-[18.625rem] 2xl:h-[22.35rem] 3xl:h-[27.938rem]">
        <img
          src={data?.image}
          alt={data?.image}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:bg-[#191919] text-white order-1 md:order-2 md:py-[1.2rem] lg:py-[1.6rem] xl:py-[2rem] 2xl:py-[2.4rem] 3xl:py-[3rem] md:px-[1rem] lg:px-[1.333rem] xl:px-[1.667rem] 2xl:px-[2rem] 3xl:px-[2.5rem]">
        <h3 className="font-bold text-[1rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
          {data?.title}
        </h3>
        <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-1 md:mt-[0.2rem] lg:mt-[0.267rem] xl:mt-[0.333rem] 2xl:mt-[0.4rem] 3xl:mt-[0.5rem]">
          {data?.short_description}
        </p>
        <p
          onClick={() => openInNewTab(data?.url)}
          className="underline cursor-pointer text-[11px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] mt-2 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]"
        >
          Explore {data?.title}
        </p>
      </div>
    </div>
  );
}
