import WhatWeDoBanner from "./components/WhatWeDoBanner";
import OurServices from "./components/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";
import { COMMON_API_URL } from "@/constants";

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "what_we_do");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "What We Do",
    description:
      "QNL Software provides custom web, mobile, and AI solutions, building scalable digital products and expert teams for startups and enterprises",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default function WhatWeDo() {
  return (
    <>
      <WhatWeDoBanner />
      <OurServices />
      <IndustriesWeServe />
      <StayConnectedWithUs />
    </>
  );
}
