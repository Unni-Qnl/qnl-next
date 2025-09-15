"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { categories } from "@/app/what-we-do/data";
import IndustriesCard from "../IndustriesCard";

type Props = {};

export default function IndustriesWeServe({}: Props) {
  return (
    <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div className="flex flex-col md:flex-row gap-2 md:gap-[2.1rem] lg:gap-[2.8rem] xl:gap-[3.5rem] 2xl:gap-[4.2rem] 3xl:gap-[5.25rem]">
        <div className="flex-1">
          <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Industries we Serve{" "}
          </h4>
        </div>
        <div className="md:w-[16.375rem] lg:w-[21.833rem] xl:w-[27.292rem] 2xl:w-[32.75rem] 3xl:w-[40.938rem]">
          <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            Driving innovation across diverse sectors with solutions that adapt,
            scale, and deliver real-world impact.
          </p>
        </div>
      </div>
      <div className="mt-[0.813rem] md:mt-[1.45rem] lg:mt-[1.933rem] xl:mt-[2.417rem] 2xl:mt-[2.9rem] 3xl:mt-[3.625rem]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:hidden"
        >
          <CarouselContent>
            {categories?.map((item) => (
              <CarouselItem
                key={item?.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <IndustriesCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:block">
          <div className="grid grid-cols-4 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
            {categories?.map((item) => (
              <IndustriesCard key={item?.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
