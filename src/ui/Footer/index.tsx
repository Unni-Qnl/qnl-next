"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { appRoutes } from "@/core/approutes";
import { HttpsResp } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { openInNewTab } from "@/utils";

type Props = {};

type TSocialMediaLink = {
  id: number;
  slug: string;
  platform: string;
  link: string;
  image: string;
};

const FOOTER_ROUTES = [
  {
    id: 1,
    label: "About Us",
    route: appRoutes.whoWeAre,
  },
  {
    id: 2,
    label: "Contact Us",
    route: appRoutes.contactus,
  },
  {
    id: 3,
    label: "Career",
    route: appRoutes.career,
  },
  {
    id: 4,
    label: "Locations",
    route: appRoutes.locations,
  },
  {
    id: 5,
    label: "Sitemap",
    route: appRoutes.sitemap,
  },
  {
    id: 6,
    label: "CSR & Sustainability",
    route: appRoutes.csrandsustainability,
  },
];

export default function Footer({}: Props) {
  const getSocialMediaLinks = async () => {
    try {
      const response = await axios<HttpsResp<TSocialMediaLink[]>>(
        APP_API_ROUTES.socialMediaLinks,
      );
      if (response?.data?.data && response?.data?.status) {
        return response?.data?.data ?? [];
      }
      return [];
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["SOCIAL_MEDIA_LINKS"],
    queryFn: getSocialMediaLinks,
    refetchOnWindowFocus: false,
  });

  return (
    <footer className="bg-gradient-to-t from-[#202020] to-[#000000] p-10 md:px-[4.75rem] lg:px-[6.333rem] xl:px-[7.917rem] 2xl:px-[9.5rem] 3xl:px-[11.875rem] md:pt-[2.5rem] lg:pt-[3.333rem] xl:pt-[4.167rem] 2xl:pt-[5rem] 3xl:pt-[6.25rem] border-t-[1px] border-t-[#5C5C5C]">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <Link href={appRoutes.home}>
            <img
              className="w-[5.458rem] md:w-[2.9rem] lg:w-[3.867rem] xl:w-[4.833rem] 2xl:w-[5.8rem] 3xl:w-[7.25rem]"
              src="/app-logo.svg"
              alt="app-logo"
              loading="lazy"
            />
          </Link>
          <div className="mt-8 flex items-center gap-4">
            {data &&
              data?.map((item) => (
                <div
                  key={item?.id}
                  className="cursor-pointer size-8 md:size-[1.2rem] lg:size-[1.6rem] xl:size-[2rem] 2xl:size-[2.4rem] 3xl:size-[3rem] rounded-full [background-image:linear-gradient(180deg,#595959_0%,#0F0F0F_58.65%)] p-[1px] md:p-[2px] flex items-center overflow-hidden"
                >
                  <div
                    onClick={() => openInNewTab(item?.link)}
                    className="bg-black size-full rounded-full grid place-items-center p-2 overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={item?.image}
                      alt={item?.platform}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <ul className="cursor-pointer font-semibold text-[0.875rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] flex flex-col md:flex-row md:items-center gap-6 md:gap-[1.475rem] lg:gap-[1.967rem] xl:gap-[2.458rem] 2xl:gap-[2.95rem] 3xl:gap-[3.688rem]">
            <li>
              <Link href={appRoutes?.qnlbpm}>QNL BPM</Link>
            </li>
            <li>
              <Link href={appRoutes?.harmony}>Harmony</Link>
            </li>
          </ul>
          <ul className="cursor-pointer font-semibold text-[0.875rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] flex flex-col md:flex-row md:items-center gap-6 md:gap-[1.475rem] lg:gap-[1.967rem] xl:gap-[2.458rem] 2xl:gap-[2.95rem] 3xl:gap-[3.688rem] mt-10 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem] ">
            {FOOTER_ROUTES.map((data) => (
              <li key={data?.id}>
                <Link href={data?.route}>{data?.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 md:flex md:items-center md:justify-between md:border-t-[1px] md:border-t-[#6D6D6D] md:pt-[0.4rem] lg:pt-[0.533rem] xl:pt-[0.667rem] 2xl:pt-[0.8rem] 3xl:pt-[1rem]">
        <p className="text-[0.75rem] text-[#C0C0C0]">
          © 2025 QNL Software. All Rights Reserved.
        </p>
        <ul className="cursor-pointer mt-6 md:mt-0 flex items-center justify-between md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem] text-[0.75rem]">
          <li className="underline text-[#C0C0C0]">
            <Link href={appRoutes?.privacypolicy}>Privacy Policy</Link>
          </li>
          <li className="underline text-[#C0C0C0]">
            <Link href={appRoutes.termsandconditions}>Terms & Conditions</Link>
          </li>
          <li className="underline text-[#C0C0C0]">
            <Link href={appRoutes.cookiepolicy}>Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
