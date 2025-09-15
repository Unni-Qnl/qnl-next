"use client";

import { useEffect, useState } from "react";
import LocationCard from "../LocationCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, HttpsResp } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";

type Props = {};

type Label = {
  id: number;
  name: string;
};

export type TLocation = {
  id: number;
  slug: string;
  address: string;
  country: Label;
  state: Label;
  region: Label;
  is_active: boolean;
};

export default function LocationsListing({}: Props) {
  const [activeRegion, setActiveRegion] = useState<string>("");
  const [countryList, setCountryList] = useState<
    { label: string; value: number; slug: string }[]
  >([]);

  const { data } = useQuery({
    queryKey: ["LOCATIONS", activeRegion],
    queryFn: async () => {
      try {
        const response = await axios.get<ApiResponse<TLocation[]>>(
          APP_API_ROUTES.locations,
          {
            params: {
              paginate: false,
              global_region: activeRegion !== "all" ? activeRegion : undefined,
            },
          },
        );
        if (response?.data?.status && response?.data?.data?.results) {
          return response?.data?.data?.results ?? [];
        }
        return [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { data: regions } = useQuery({
    queryKey: ["REGIONS_BUTTONS"],
    queryFn: async () => {
      try {
        const response = await axios.get<
          HttpsResp<{ name: string; slug: string; id: number }[]>
        >(APP_API_ROUTES.globalRegions);
        if (response?.data?.status && response?.data?.data) {
          const updatedData = response?.data?.data?.map((item) => ({
            label: item?.name,
            value: item?.id,
            slug: item?.slug,
          }));
          return updatedData ?? [];
        }
        return [];
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (regions) {
      const updatedArray = [
        {
          label: "All Regions",
          value: 0,
          slug: "all",
        },
        ...regions,
      ];
      setActiveRegion(updatedArray[0]?.slug);
      setCountryList(updatedArray ?? []);
    }
  }, [regions]);

  return (
    <div className="isolate container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div className="hide-scrollbar grid grid-flow-col overflow-x-auto gap-2 md:gap-[0.604rem] lg:gap-[0.806rem] xl:gap-[1.007rem] 2xl:gap-[1.209rem] 3xl:gap-[1.511rem]">
        {countryList?.map((region) => (
          <button
            key={region?.value}
            onClick={() => setActiveRegion(region?.slug)}
            className={`text-nowrap cursor-pointer text-[0.625rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] p-2 md:py-[0.25rem] lg:py-[0.333rem] xl:py-[0.417rem] 2xl:py-[0.5rem] 3xl:py-[0.625rem] md:px-[0.6rem] lg:px-[0.8rem] xl:px-[1rem] 2xl:px-[1.2rem] 3xl:px-[1.5rem] rounded-[0.125rem] md:rounded-[0.05rem] lg:rounded-[0.067rem] xl:rounded-[0.083rem] 2xl:rounded-[0.1rem] 3xl:rounded-[0.125rem] ${activeRegion === region?.slug ? "bg-primary border-[1px] border-primary" : "border-[1px] border-[#6E6E6E]"}`}
          >
            {region?.label}
          </button>
        ))}
      </div>
      <div className="mt-6 md:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[2rem] 2xl:mt-[2.4rem] 3xl:mt-[3rem] grid gap-6 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem] md:grid-cols-3 lg:grid-cols-3">
        {data?.map((location) => (
          <LocationCard key={location?.id} data={location} />
        ))}
      </div>
    </div>
  );
}
