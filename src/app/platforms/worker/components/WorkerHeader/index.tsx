"use client";

import Button from "@/core/components/Button";
import iworkerImage from "@/assets/platforms/worker.webp";
import Image from "next/image";

type Props = {};

export default function WorkerHeader({}: Props) {
  return (
    <div className="relative">
      <div className="container grid md:grid-cols-2 gap-10 md:gap-[1rem] lg:gap-[1.333rem] xl:gap-[1.667rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem] md:my-[3.375rem] lg:my-[4.5rem] xl:my-[5.625rem] 2xl:my-[6.75rem] 3xl:my-[8.438rem]">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-start">
            <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
              The Smart HR Portal for Startups 
            </h1>
            <p className="text-sm md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem] mt-1 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
              Your complete HR system – payroll, leave, hiring, and employee
              management.
            </p>
            <div className="mt-4 md:mt-[1.6rem] lg:mt-[2.133rem] xl:mt-[2.667rem] 2xl:mt-[3.2rem] 3xl:mt-[4rem]">
              <p className="md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] font-semibold">
                Free for startups with less than 10 employees.
              </p>
              <Button className="mt-4 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="md:w-[20.625rem] lg:w-[27.5rem] xl:w-[34.375rem] 2xl:w-[41.25rem] 3xl:w-[51.563rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]"
            alt="worker image"
            src={iworkerImage}
          />
        </div>
      </div>
      <div className="container grid md:grid-cols-2 md:gap-[2.675rem] lg:gap-[3.567rem] xl:gap-[4.458rem] 2xl:gap-[5.35rem] 3xl:gap-[6.688rem] my-8 md:my-[5.225rem] lg:my-[6.967rem] xl:my-[8.708rem] 2xl:my-[10.45rem] 3xl:my-[13.063rem]">
        <div>
          <h2 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
            Why Worker?
          </h2>
          <p className="leading-loose md:leading-normal text-xs md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem] mt-2 md:mt-0">
            Startups should focus on growth, not paperwork. Worker simplifies HR
            with powerful tools for managing employees, payroll, and compliance
            – all in one place.
          </p>
        </div>
        <div className="flex flex-col justify-center mt-6 md:mt-0">
          <ul className="list-disc list-inside md:list-outside leading-loose md:leading-normal text-xs md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
            <li>Free for startups (under 10 employees) </li>
            <li>Cloud-based & secure </li>
            <li>Easy to use — no training required </li>
            <li>Mobile + Web access </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
