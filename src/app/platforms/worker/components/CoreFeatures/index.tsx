import React from "react";

type Props = {};

const datas = [
  {
    id: 1,
    title: "Career Management",
    description:
      "Post jobs, track applications, and manage hiring in one place",
  },
  {
    id: 2,
    title: "Leave Management",
    description: "Streamline leave requests, approvals, and settings.",
  },
  {
    id: 3,
    title: "Payroll & Compliance",
    description:
      "Automated pay slips, Salary summary, Gratuity reports, Insurance tracking",
  },
  {
    id: 4,
    title: "Employee Management ",
    description: "Centralized employee profiles, documents, and history.",
  },
];

export default function CoreFeatures({}: Props) {
  return (
    <div className="bg-white md:py-[0.8rem] lg:py-[1.067rem] xl:py-[1.333rem] 2xl:py-[1.6rem] 3xl:py-[2rem] md:px-[1.6rem] lg:px-[2.133rem] xl:px-[2.667rem] 2xl:px-[3.2rem] 3xl:px-[4rem] bg-[linear-gradient(180deg,#FFFFFF_0%,#CACACA_48.82%,#000000_100%)]">
      <h3 className="text-[#3A3541] text-center md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
        Core Features
      </h3>
      <div className="grid grid-cols-2 md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] 2xl:gap-[1.2rem] 3xl:gap-[1.5rem] md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
        {datas?.map((data) => (
          <div
            key={data?.id}
            className="md:h-[18.1rem] lg:h-[24.133rem] xl:h-[30.167rem] 2xl:h-[36.2rem] 3xl:h-[45.25rem] bg-white md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]"
          >
            <div></div>
            <div className="text-black">
              <p>{data?.title}</p>
              <p>{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
