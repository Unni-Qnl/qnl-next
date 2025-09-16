import WhoWeAreBanner from "./components/WhoWeAreBanner";
import BusinessImpact from "./components/BusinessImpact";
import WhoWeAreDescription from "./components/WhoWeAreDescription";
import OurApproach from "./components/OurApproach";
import NavigatingTomorrow from "./components/NavigatingTomorrow";
import OurImpactInNumbers from "./components/OurImpactInNumbers";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Learn how QNL Software helps clients build scalable, efficient, and secure digital solutions",
};

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
