"use client";

import Navbar from "@/core/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { TJob } from "../../../components/RolesListing";
import Button from "@/core/components/Button";
import { appRoutes } from "@/core/approutes";

type Props = {
  data: TJob;
};

export default function JobDetailsHeader({ data }: Props) {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="container py-8 md:py-0 flex items-end md:items-center justify-between md:pb-[4.2rem] lg:pb-[5.6rem] xl:pb-[7rem] 2xl:pb-[8.4rem] 3xl:pb-[10.5rem]">
        <div>
          <h3 className="text-[24px] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem]">
            {data?.title}
          </h3>
          <div className="flex items-center gap-2 md:gap-[1rem] lg:gap-[1.333rem] xl:gap-[1.667rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem] mt-2 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
            <div className="capitalize border-[1px] border-[#474747] text-[10px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">
              {data?.job_site}-{data?.job_location}
            </div>
            {/* <div className="capitalize border-[1px] border-[#474747] text-[10px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">Design & UX</div> */}
            <div className="capitalize border-[1px] border-[#474747] text-[10px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">
              {data?.employment_type}
            </div>
          </div>
        </div>
        <div>
          <Button
            onClick={() => router.push(`${appRoutes.applynow}/${data?.id}`)}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
