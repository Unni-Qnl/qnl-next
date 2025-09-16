"use client";

import { TInsight } from "../../insights.types";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";
import Image from "next/image";

type Props = {
  data: TInsight;
};

export default function InsightsCard({ data }: Props) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`${appRoutes.insights}/${data?.slug}`)}
    >
      <div className="relative h-[8.375rem] md:h-[13.275rem] lg:h-[17.7rem] xl:h-[22.125rem] 2xl:h-[26.55rem] 3xl:h-[33.188rem]">
        <Image
          alt={data?.heading}
          className="w-full h-full object-cover"
          src={data?.image}
          blurDataURL={data?.blur_image}
          loading="lazy"
          fill
        />
        <div
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.09%, #000000 100%), linear-gradient(342.99deg, rgba(0, 0, 0, 0) 80.59%, rgba(0, 0, 0, 0.7) 98.15%)`,
          }}
          className="absolute inset-0 flex items-end p-1.5 md:p-0 md:pb-[1.025rem] lg:pb-[1.367rem] xl:pb-[1.708rem] 2xl:pb-[2.05rem] 3xl:pb-[2.563rem]"
        >
          <h4 className="font-semibold text-[0.75rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem]">
            {data?.heading}
          </h4>
        </div>
      </div>
      <div>
        <p className="font-normal text-[0.625rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
          {data?.short_description}
        </p>
        <button className="mt-2 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem] font-bold text-[0.625rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] cursor-pointer">
          READ MORE
        </button>
      </div>
    </div>
  );
}
