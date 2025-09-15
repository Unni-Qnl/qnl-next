import WhoWeAreBanner from "./components/WhoWeAreBanner";
import BusinessImpact from "./components/BusinessImpact";
import WhoWeAreDescription from "./components/WhoWeAreDescription";
import OurApproach from "./components/OurApproach";
import NavigatingTomorrow from "./components/NavigatingTomorrow";
import OurImpactInNumbers from "./components/OurImpactInNumbers";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";

type Props = {};

export default function WhoWeAre({}: Props) {
  return (
    <section>
      <WhoWeAreBanner />
      <BusinessImpact />
      <WhoWeAreDescription />
      <OurApproach />
      <NavigatingTomorrow />
      <OurImpactInNumbers />
      <StayConnectedWithUs />
    </section>
  );
}
