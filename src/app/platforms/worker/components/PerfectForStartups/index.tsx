"use client";

import Button from "@/core/components/Button";
import startUpImage1 from "@/assets/platforms/start-up1.svg";
import startUpImage2 from "@/assets/platforms/start-up2.svg";
import startUpImage3 from "@/assets/platforms/start-up3.svg";
import Image from "next/image";

type Props = {};

const data = [
  {
    id: 1,
    image: startUpImage1,
    title: "Scales as you grow",
  },
  {
    id: 2,
    image: startUpImage2,
    title: "Free for up to 10 employees ",
  },
  {
    id: 3,
    image: startUpImage3,
    title: "No hidden charges ",
  },
];

export default function PerfectForStartups({}: Props) {
  return (
    <div className="px-8 md:px-[4.725rem] lg:px-[6.3rem] xl:px-[7.875rem] 2xl:px-[9.45rem] 3xl:px-[11.813rem] md:flex items-center gap-6 md:gap-[1.5rem] lg:gap-[2rem] xl:gap-[2.5rem] 2xl:gap-[3rem] 3xl:gap-[3.75rem] py-8 md:py-[4rem] lg:py-[5.333rem] xl:py-[6.667rem] 2xl:py-[8rem] 3xl:py-[10rem]">
      <div className="w-full md:w-[22.625rem] lg:w-[30.167rem] xl:w-[37.708rem] 2xl:w-[45.25rem] 3xl:w-[56.563rem]">
        <p className="text-xs md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
          Perfect for Startups 
        </p>
        <h3 className="text-lg md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem] mt-1.5 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
          Worker is built for startups who want enterprise-grade HR without the
          cost. 
        </h3>
        <Button className="mt-2 md:mt-[2.525rem] lg:mt-[3.367rem] xl:mt-[4.208rem] 2xl:mt-[5.05rem] 3xl:mt-[6.313rem]">
          Start Free Today
        </Button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-0 md:flex-1 mt-6 md:mt-0">
        {data?.map((item) => (
          <div key={item?.id} className="flex items-center">
            <Image
              className="size-6 md:size-[4rem] lg:size-[5.333rem] xl:size-[6.667rem] 2xl:size-[8rem] 3xl:size-[10rem] object-cover"
              src={item?.image}
              alt={item?.title}
              loading="lazy"
            />
            <p className="text-[10px] md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
