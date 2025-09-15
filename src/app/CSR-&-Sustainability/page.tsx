"use client";

import { useMeta } from "@/contexts/MetaContext";
import React from "react";
import CsrAndSustainabilityBanner from "./components/CsrAndSustainabilityBanner";
import OurCommitmentToSustainability from "./components/OurCommitmentToSustainability";
import OurSustainabilityPhilosophy from "./components/OurSustainabilityPhilosophy";
import OurActionsAndInitiatives from "./components/OurActionsAndInitiatives";
import SustainabilityAccountabilityBlock from "./components/SustainabilityAccountabilityBlock";
import CollaborationsForChange from "./components/CollaborationsForChange";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";

type Props = {};

export default function CsrAndSustainability({}: Props) {
  const { value: metaData } = useMeta();
  return (
    <section>
      {/* <title>Csr And Sustainability</title>
      <meta
        name="keywords"
        content={metaData?.csr_and_sustainability?.keywords}
      />
      <link
        rel="canonical"
        href="https://qnlsoftware.com/CSR-&-Sustainability"
      /> */}
      <CsrAndSustainabilityBanner />
      <OurCommitmentToSustainability />
      <OurSustainabilityPhilosophy />
      <OurActionsAndInitiatives />
      <SustainabilityAccountabilityBlock />
      <CollaborationsForChange />
      <div className="pb-8 md:pb-[2.6rem] lg:pb-[3.467rem] xl:pb-[4.333rem] 2xl:pb-[5.2rem] 3xl:pb-[6.5rem]">
        <StayConnectedWithUs />
      </div>
    </section>
  );
}
