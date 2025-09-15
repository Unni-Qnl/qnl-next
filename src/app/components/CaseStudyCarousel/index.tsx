"use client";

import useCaseStudy from "@/hooks/useCaseStudy";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CaseStudyCard from "../CaseStudyCard";

type Props = {};

export default function CaseStudyCarousel({}: Props) {
  const { data } = useCaseStudy();
  return (
    <div className="pb-8 md:pb-[2.6rem] lg:pb-[3.467rem] xl:pb-[4.333rem] 2xl:pb-[5.2rem] 3xl:pb-[6.5rem]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container"
      >
        <CarouselContent>
          {data?.map((item) => (
            <CarouselItem
              key={item?.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <CaseStudyCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:left-[-3.5rem] left-[-0.8rem]" />
        <CarouselNext className="md:right-[-3.5rem] right-[-0.8rem]" />
      </Carousel>
    </div>
  );
}
