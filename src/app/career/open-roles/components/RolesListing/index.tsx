"use client";

import { MultiSelect } from "@/core/components/MultiSelect";
import RoleCard from "../RoleCard";
import Button from "@/core/components/Button";
import axios from "axios";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, HttpsResp } from "@/types/global.type";
import RoleCardSkeleton from "../RoleCardSkeleton";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { QUERY_KEY } from "@/constants/app-query-keys";
import { appRoutes } from "@/core/approutes";
import { useRouter } from "next/navigation";

type Props = {};

export type TJob = {
  id: number;
  slug: string;
  title: string;
  department: number;
  employment_type: string;
  location: Location;
  description: string;
  job_location: string;
  job_site: string;
  is_active: boolean;
};

export type Location = {
  id: number;
  slug: string;
  address: string;
  country: TOptions;
  state: TOptions;
  region: TOptions;
  is_active: boolean;
};

export type TOptions = {
  id: number;
  name: string;
};

const cities = [
  { label: "Kochi", value: "Kochi" },
  { label: "Thrissur", value: "Thrissur" },
  { label: "Chennai", value: "Chennai" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Pune", value: "Pune" },
  { label: "Noida", value: "Noida" },
];

export default function RolesListing({}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const router = useRouter();

  const getRoles = async () => {
    try {
      const params = new URLSearchParams();

      // Repeated `categories` keys
      selectedLocation.forEach((location) => {
        params.append("location", location);
      });

      // Always include paginate
      params.append("paginate", "false");

      // Conditionally add search param
      if (searchTerm) {
        params.append("search", debouncedTerm);
      }
      const response = await axios<ApiResponse<TJob[]>>(
        APP_API_ROUTES.jobListing,
        {
          params,
        },
      );
      if (response?.data && response?.data?.status) {
        return response?.data?.data?.results;
      }
      return [];
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.jobListing, debouncedTerm, selectedLocation],
    queryFn: getRoles,
    refetchOnWindowFocus: false,
  });
  const { data: locations } = useQuery({
    queryKey: [QUERY_KEY.regionListing],
    queryFn: async () => {
      try {
        const response = await axios.get<
          HttpsResp<{ slug: number; name: string }[]>
        >(APP_API_ROUTES.regionListing);
        if (response?.data?.data && response?.data?.status) {
          return response?.data?.data?.map((item) => ({
            label: item?.name,
            value: item?.slug,
          }));
        }
        return [];
      } catch (error) {
        console.error(error);
      }
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  return (
    <div className="isolate bg-white text-black">
      <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
        <h2 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          Let’s Get Started
        </h2>
        <div className="mt-3.5 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem] grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
          <div>
            <label className="text-[1rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] mb-1 md:mb-[0.4rem] lg:mb-[0.533rem] xl:mb-[0.667rem] 2xl:mb-[0.8rem] 3xl:mb-[1rem] block">
              Search Opportunites
            </label>
            <Input
              placeholder="Search opportunity"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[1rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] mb-1 md:mb-[0.4rem] lg:mb-[0.533rem] xl:mb-[0.667rem] 2xl:mb-[0.8rem] 3xl:mb-[1rem] block">
              Location
            </label>
            <MultiSelect
              queryKey=""
              url=""
              onValueChange={(val) => setSelectedLocation(val)}
              options={cities}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem] mt-8 md:mt-[1.4rem] lg:mt-[1.867rem] xl:mt-[2.333rem] 2xl:mt-[2.8rem] 3xl:mt-[3.5rem]">
          {isLoading ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <RoleCardSkeleton key={index} />
              ))}
            </>
          ) : data && data.length > 0 ? (
            data.map((role) => <RoleCard role={role} key={role?.id} />)
          ) : (
            <div className="col-span-full">
              <p className="text-[#5A5A5A] text-center font-semibold text-[1rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
                There are no job openings at the moment.
                {/* but you can <span className="text-primary underline cursor-pointer">join our talent</span> network to stay updated on future opportunities and events that match your interests. */}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-[2.6rem] lg:mt-[3.467rem] xl:mt-[4.333rem] 2xl:mt-[5.2rem] 3xl:mt-[6.5rem] py-6 md:py-0">
          <h3 className="font-light text-[14px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Become a Part of Our Community
          </h3>
          <p className="text-[10px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            Sign up to access exclusive opportunities and updates tailored for
            you.
          </p>
          <Button
            onClick={() => router.push(appRoutes.joinus)}
            className="text-white mt-2.5 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]"
          >
            Join Us
          </Button>
        </div>
      </div>
    </div>
  );
}
