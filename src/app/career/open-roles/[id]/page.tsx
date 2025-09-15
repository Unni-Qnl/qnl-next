"use client";

import Navbar from "@/core/components/Navbar";
import { DetailApiResponse } from "@/types/global.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { use } from "react";
import { TJob } from "../components/RolesListing";
import { APP_API_ROUTES } from "@/apis/api-routes";
import Button from "@/core/components/Button";
import PartOfOurCommunity from "../../components/PartOfOurCommunity";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";

type Props = {
  params: Promise<{ id: string }>;
};

export default function JobDetails({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const { data } = useQuery({
    queryKey: ["JOB_DETAILS", id],
    queryFn: async () => {
      try {
        const response = (
          await axios<DetailApiResponse<TJob>>(`${APP_API_ROUTES.jobListing}`, {
            params: {
              slug: id,
            },
          })
        ).data;
        if (response?.data && response?.status) {
          return response?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  const jobData = {
    Role: data?.title,
    Location: `${data?.job_site} - ${data?.job_location}`,
    Categories: data?.department,
    Type: data?.employment_type,
  };

  return (
    <section>
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
    </section>
  );
}
