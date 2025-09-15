"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { QNL_BPM_SERVICES } from "@/app/QNL-BPM/data";
import QnlBpmCard from "../QnlBpmCard";

type Props = {};

export default function ServiceWeOffer({}: Props) {
  return (
    <div className="container isolate py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div className="pb-8 md:pb-[2.5rem] lg:pb-[3.333rem] xl:pb-[4.167rem] 2xl:pb-[5rem] 3xl:pb-[6.25rem]">
        <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
          QNL BPM is the Business Process Management division of QNL Software,
          delivering high-quality outsourcing services tailored to global
          business needs. Whether you're a startup or an enterprise, we help you
          streamline non-core functions, cut costs, and improve efficiency using
          technology-driven processes.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
          Services We Offer
        </h4>
        <div className="mt-1 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full md:hidden"
          >
            <CarouselContent>
              {QNL_BPM_SERVICES?.map((item) => (
                <CarouselItem
                  key={item?.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <QnlBpmCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
              {QNL_BPM_SERVICES?.map((data) => (
                <QnlBpmCard key={data?.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
