import InsightsCarousel from "@/ui/InsightsCarousel";
import CaseStudyCarousel from "./components/CaseStudyCarousel";
import DiscoverWhatDriveUs from "./components/DiscoverWhatDriveUs";
import HomeBanner from "./components/HomeBanner";
import VissionAndMission from "./components/VissionAndMission";
import NewsLetter from "./components/NewsLetter";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <DiscoverWhatDriveUs />
      <CaseStudyCarousel />
      <VissionAndMission />
      <div>
        <div className="my-8 md:my-[2.6rem] lg:my-[3.467rem] xl:my-[4.333rem] 2xl:my-[5.2rem] 3xl:my-[6.5rem] p-8 md:py-[5rem] lg:py-[6.667rem] xl:py-[8.333rem] 2xl:py-[10rem] 3xl:py-[12.5rem] md:px-[7.5rem] lg:px-[10rem] xl:px-[12.5rem] 2xl:px-[15rem] 3xl:px-[18.75rem]">
          <p className="text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            We combine innovation, expertise, and agility to help organizations
            build smarter, scale faster, and operate better — beyond
            expectations.
          </p>
        </div>
        <InsightsCarousel />
      </div>
      <NewsLetter />
      <div className="py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
        <StayConnectedWithUs />
      </div>
    </>
  );
}
