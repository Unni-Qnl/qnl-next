"use client";

import { TJob } from "../../../components/RolesListing";
import Button from "@/core/components/Button";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";
import PartOfOurCommunity from "@/app/career/components/PartOfOurCommunity";

type Props = {
  data: TJob;
};

export default function JobDescription({ data }: Props) {
  const router = useRouter();
  const jobData = {
    Role: data?.title,
    Location: `${data?.job_site} - ${data?.job_location}`,
    Categories: data?.department,
    Type: data?.employment_type,
  };
  return (
    <div className="isolate bg-white text-black py-4 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div className="container flex flex-col md:flex-row items-start gap-4 md:gap-[2.5rem] lg:gap-[3.333rem] xl:gap-[4.167rem] 2xl:gap-[5rem] 3xl:gap-[6.25rem]">
        <div className="flex-1 order-2 md:order-1">
          <h4 className="text-[16px] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Description
          </h4>
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
          />
        </div>
        <div className="w-full order-1 md:order-2 md:w-[9.45rem] lg:w-[12.6rem] xl:w-[15.75rem] 2xl:w-[18.9rem] 3xl:w-[23.625rem]">
          <h4 className="font-medium text-[16px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            Career Overview
          </h4>
          <div className="mt-6 md:mt-0">
            {Object.entries(jobData).map(([label, value], index) => (
              <div
                key={index}
                className="grid grid-cols-[14ch_1fr] mt-2 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]"
              >
                <p className="font-semibold capitalize text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
                  {label}:
                </p>
                <p className="text-[12px] capitalize md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
                  {value}
                </p>
              </div>
            ))}
            <Button
              onClick={() => router.push(`${appRoutes.applynow}/${data?.id}`)}
              className="text-white hidden md:block md:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[2rem] 2xl:mt-[2.4rem] 3xl:mt-[3rem]"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      <PartOfOurCommunity />
    </div>
  );
}
