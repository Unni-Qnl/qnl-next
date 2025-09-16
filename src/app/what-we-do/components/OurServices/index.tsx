"use client";

import { useEffect, useState } from "react";
import ServiceAccordion from "../ServiceAccordion";
import AnimatedServicesCard from "../AnimatedServicesCard";
import { TService } from "@/types/modules.types";
import useServices from "@/hooks/useServices";

type TActiveService = {
  index: number;
  data: TService;
};
export default function OurServices() {
  const [activeService, setActiveService] = useState<TActiveService>();
  const { data } = useServices();

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setActiveService({
        index: 0,
        data: data[0],
      });
    }
  }, [data]);

  return (
    <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div className="flex flex-col md:flex-row gap-2 md:gap-[2.1rem] lg:gap-[2.8rem] xl:gap-[3.5rem] 2xl:gap-[4.2rem] 3xl:gap-[5.25rem]">
        <div className="flex-1">
          <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Our Services
          </h4>
        </div>
        <div className="md:w-[16.375rem] lg:w-[21.833rem] xl:w-[27.292rem] 2xl:w-[32.75rem] 3xl:w-[40.938rem]">
          <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            Tailored digital solutions built to scale, streamline, and empower —
            across industries, platforms, and technologies.
          </p>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="mt-[0.813rem] grid md:hidden gap-[0.813rem]">
        {data?.map((service, index) => (
          <ServiceAccordion key={service?.id} {...service} index={index + 1} />
        ))}
      </div>

      {/* Desktop List */}
      <div className="hidden md:block">
        <div className="flex md:gap-[2.1rem] lg:gap-[2.8rem] xl:gap-[3.5rem] 2xl:gap-[4.2rem] 3xl:gap-[5.25rem] md:mt-[1.45rem] lg:mt-[1.933rem] xl:mt-[2.417rem] 2xl:mt-[2.9rem] 3xl:mt-[3.625rem]">
          <ul
            data-lenis-prevent
            className="grid md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] 2xl:gap-[1.2rem] 3xl:gap-[1.5rem] flex-1 md:max-h-[21.05rem] lg:max-h-[28.067rem] xl:max-h-[35.083rem] 2xl:max-h-[42.1rem] 3xl:max-h-[52.625rem] h-full overflow-y-auto hide-scrollbar"
          >
            {data?.map((service, index) => (
              <li
                key={service?.id}
                onMouseEnter={() => {
                  setActiveService({
                    data: service,
                    index: index,
                  });
                }}
                className={`cursor-pointer text-[#979797] hover:text-white hover:border-b-2 hover:border-b-primary w-fit md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem] ${index === activeService?.index ? "border-b-primary border-b-2 text-white" : "border-none"}`}
              >
                {service?.title}
              </li>
            ))}
          </ul>
          <AnimatedServicesCard
            activeService={activeService as TActiveService}
          />
        </div>
      </div>
    </div>
  );
}
