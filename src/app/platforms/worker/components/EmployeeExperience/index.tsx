"use client";

import img from "@/assets/platforms/user-exp.webp";
import Image from "next/image";

type Props = {};

export default function EmployeeExperience({}: Props) {
  return (
    <div className="md:px-[4.725rem] lg:px-[6.3rem] xl:px-[7.875rem] 2xl:px-[9.45rem] 3xl:px-[11.813rem] grid grid-cols-2 items-center md:mt-[1.5rem] lg:mt-[2rem] xl:mt-[2.5rem] 2xl:mt-[3rem] 3xl:mt-[3.75rem] md:py-[2.75rem] lg:py-[3.667rem] xl:py-[4.583rem] 2xl:py-[5.5rem] 3xl:py-[6.875rem]">
      <Image
        className="md:w-[18.4rem] lg:w-[24.533rem] xl:w-[30.667rem] 2xl:w-[36.8rem] 3xl:w-[46rem] object-cover"
        src={img}
        alt="user experience"
        loading="lazy"
      />
      <div>
        <p className="md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
          Employee Experience
        </p>
        <h3 className="md:text-[2rem] lg:text-[2.667rem] xl:text-[3.333rem] 2xl:text-[4rem] 3xl:text-[5rem]">
          Give employees more control with:
        </h3>
        <ul className="list-disc list-outside md:gap-[1.5rem] lg:gap-[2rem] xl:gap-[2.5rem] 2xl:gap-[3rem] 3xl:gap-[3.75rem] md:ml-[1.5rem] lg:ml-[2rem] xl:ml-[2.5rem] 2xl:ml-[3rem] 3xl:ml-[3.75rem] md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem] md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]">
          <li>
            Employee Dashboard: Real-time updates, pay slips, leave balance, and
            more.
          </li>
          <li>Mobile App: Access HR services anytime, anywhere.</li>
        </ul>
      </div>
    </div>
  );
}
