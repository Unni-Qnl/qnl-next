"use client";

import React from "react";
import WhatWeDoBanner from "./components/WhatWeDoBanner";
import OurServices from "./components/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import useServices from "@/hooks/useServices";

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
