import CsrAndSustainabilityBanner from "./components/CsrAndSustainabilityBanner";
import OurCommitmentToSustainability from "./components/OurCommitmentToSustainability";
import OurSustainabilityPhilosophy from "./components/OurSustainabilityPhilosophy";
import OurActionsAndInitiatives from "./components/OurActionsAndInitiatives";
import SustainabilityAccountabilityBlock from "./components/SustainabilityAccountabilityBlock";
import CollaborationsForChange from "./components/CollaborationsForChange";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";
import { COMMON_API_URL } from "@/constants";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "csr_and_sustainability");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "Csr And Sustainability",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default function CsrAndSustainability({}: Props) {
  return (
    <section>
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
