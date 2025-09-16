"use client";

import React from "react";
import WhatWeDoBanner from "./components/WhatWeDoBanner";
import OurServices from "./components/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import useServices from "@/hooks/useServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "QNL Software provides custom web, mobile, and AI solutions, building scalable digital products and expert teams for startups and enterprises",
};

export default function WhatWeDo() {
  const { data } = useServices();
  return (
    <>
      <WhatWeDoBanner />
      <OurServices data={data ?? []} />
      <IndustriesWeServe />
      <StayConnectedWithUs />
    </>
  );
}
