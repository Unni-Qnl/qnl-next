"use client";

import Navbar from "@/core/components/Navbar";
import Breadcrumb from "@/ui/Breadcrumb";
import React from "react";
import PlatformCard from "./components/PlatformCard";
import { ApiResponse } from "@/types/global.type";
import axios from "axios";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { useQuery } from "@tanstack/react-query";

type Props = {};

export type TPlatform = {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  is_active: boolean;
  image: string;
  url: string;
};

export default function Platforms({}: Props) {
  const getPlatforms = async () => {
    try {
      const response = (
        await axios.get<ApiResponse<TPlatform[]>>(APP_API_ROUTES.platform, {
          params: { paginate: false },
        })
      ).data;
      if (response?.data && response?.status) {
        return response?.data?.results;
      }

      return [];
    } catch (error) {
      console.error(error);
    }
  };
  const { data } = useQuery({
    queryKey: ["PLATFORM"],
    queryFn: getPlatforms,
  });

  return (
    <section>
      <Navbar />
      <div className="container py-8 md:py-0">
        <Breadcrumb />
        <h1 className="mt-1 md:mt-0 text-2xl md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem]">
          Platforms
        </h1>
      </div>
      <div className="container grid gap-8 md:gap-0 pt-8 md:pt-0 pb-8 md:pb-[2.6rem] lg:pb-[3.467rem] xl:pb-[4.333rem] 2xl:pb-[5.2rem] 3xl:pb-[6.5rem]">
        {data?.map((platform) => (
          <PlatformCard key={platform.id} data={platform} />
        ))}
      </div>
    </section>
  );
}
