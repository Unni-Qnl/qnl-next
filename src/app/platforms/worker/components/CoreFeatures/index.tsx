"use client";

import img1 from "@/assets/platforms/worker-img5.webp";
import img2 from "@/assets/platforms/worker-img2.webp";
import img3 from "@/assets/platforms/worker-img1.webp";
import img4 from "@/assets/platforms/worker-img4.webp";
import img5 from "@/assets/platforms/worker-img3.webp";
import Image from "next/image";

const datas = [
  {
    id: 1,
    title: "Career Management",
    description:
      "Post jobs, track applications, and manage hiring in one place",
    img: img1,
  },
  {
    id: 2,
    title: "Leave Management",
    description: "Streamline leave requests, approvals, and settings.",
    img: img2,
  },
  {
    id: 3,
    title: "Payroll & Compliance",
    description:
      "Automated pay slips, Salary summary, Gratuity reports, Insurance tracking",
    img: img3,
  },
  {
    id: 4,
    title: "Employee Management ",
    description: "Centralized employee profiles, documents, and history.",
    img: img4,
  },
];

export default function CoreFeatures() {
  return (
    <div className="bg-white py-2 md:py-[0.8rem] lg:py-[1.067rem] xl:py-[1.333rem] 2xl:py-[1.6rem] 3xl:py-[2rem] px-3.5 md:px-[1.6rem] lg:px-[2.133rem] xl:px-[2.667rem] 2xl:px-[3.2rem] 3xl:px-[4rem] bg-[linear-gradient(180deg,#FFFFFF_0%,#CACACA_48.82%,#000000_100%)]">
      <h3 className="text-[#3A3541] text-center text-2xl md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
        Core Features
      </h3>
      <div className="grid md:grid-cols-2 gap-2 md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] 2xl:gap-[1.2rem] 3xl:gap-[1.5rem] mt-1.5 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
        {datas?.map((data) => (
          <div
            key={data?.id}
            className="overflow-hidden h-[195px] md:h-[18.1rem] lg:h-[24.133rem] xl:h-[30.167rem] 2xl:h-[36.2rem] 3xl:h-[45.25rem] bg-[#FBFBFB] p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]"
          >
            <div>
              <Image
                className="h-[118px] md:h-[13.25rem] lg:h-[17.667rem] xl:h-[22.083rem] 2xl:h-[26.5rem] 3xl:h-[33.125rem] object-cover"
                src={data?.img}
                alt={data?.title}
              />
            </div>
            <div className="text-black mt-1 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
              <p className="font-semibold text-sm md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
                {data?.title}
              </p>
              <p className="text-xs  md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-1.5 md:mt-[0.35rem] lg:mt-[0.467rem] xl:mt-[0.583rem] 2xl:mt-[0.7rem] 3xl:mt-[0.875rem]">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
        <div className="col-span-full flex items-center text-black md:gap-[1.25rem] lg:gap-[1.667rem] xl:gap-[2.083rem] 2xl:gap-[2.5rem] 3xl:gap-[3.125rem] bg-[#FBFBFB] md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">
          <div className="md:w-[25.675rem] lg:w-[34.233rem] xl:w-[42.792rem] 2xl:w-[51.35rem] 3xl:w-[64.188rem]">
            <Image alt="img5" src={img5} />
          </div>
          <div>
            <p className="font-semibold md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
              Organisation Management
            </p>
            <ul className="list-disc list-inside md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] md:mt-[0.25rem] lg:mt-[0.333rem] xl:mt-[0.417rem] 2xl:mt-[0.5rem] 3xl:mt-[0.625rem]">
              <li>Departments</li>
              <li>Designations</li>
              <li>Holidays</li>
              <li>Resignations Section</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
