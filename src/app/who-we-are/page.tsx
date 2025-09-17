import WhoWeAreBanner from "./components/WhoWeAreBanner";
import BusinessImpact from "./components/BusinessImpact";
import WhoWeAreDescription from "./components/WhoWeAreDescription";
import OurApproach from "./components/OurApproach";
import NavigatingTomorrow from "./components/NavigatingTomorrow";
import OurImpactInNumbers from "./components/OurImpactInNumbers";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";
import { COMMON_API_URL } from "@/constants";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "who_we_are");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "Who we are",
    description:
      "Learn how QNL Software helps clients build scalable, efficient, and secure digital solutions",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default function WhoWeAre({}: Props) {
  return (
    <>
      <WhoWeAreBanner />
      <BusinessImpact />
      <WhoWeAreDescription />
      <OurApproach />
      <NavigatingTomorrow />
      <OurImpactInNumbers />
      <StayConnectedWithUs />
    </>
  );
}
