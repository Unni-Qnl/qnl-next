import WhatWeDoBanner from "./components/WhatWeDoBanner";
import OurServices from "./components/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "QNL Software provides custom web, mobile, and AI solutions, building scalable digital products and expert teams for startups and enterprises",
};

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
