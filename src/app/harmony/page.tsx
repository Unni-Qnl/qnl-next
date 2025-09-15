import HarmonyBanner from "./components/HarmonyBanner";
import image from "@/assets/whoweare/business-impact.webp";
import ServicesUis from "./components/ServicesUis";
import TrustedPartners from "./components/TrustedPartners";
import DigitalSolutions from "./components/DigitalSolutions";
import DesignedForScale from "./components/DesignedForScale";
import PartnerWithQNLHarmony from "./components/PartnerWithQNLHarmony";

type Props = {};

export default function Harmony({}: Props) {
  return (
    <section>
      <HarmonyBanner />
      <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
        <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
          QNL Harmony is the digital marketing vertical of QNL Software,
          designed to serve mid to large-scale enterprises across industries.
          Our offerings blend data science, performance marketing, marketing
          automation, and omnichannel communication into unified business growth
          engines.
        </p>
        <div className="mt-8 md:mt-[2.5rem] lg:mt-[3.333rem] xl:mt-[4.167rem] 2xl:mt-[5rem] 3xl:mt-[6.25rem] flex flex-col md:flex-row items-center gap-3.5 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
          <div className="flex-1">
            <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
              Integrated Digital <br className="hidden md:block" /> Marketing
              Capabilities
            </h4>
            <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
              Group services into strategic business categories rather{" "}
              <br className="hidden md:block" /> than tactical outputs:
            </p>
          </div>
          <div className="overflow-hidden h-[10rem] w-full md:w-[18.3rem] lg:w-[24.4rem] xl:w-[30.5rem] 2xl:w-[36.6rem] 3xl:w-[45.75rem] md:h-[12.3rem] lg:h-[16.4rem] xl:h-[20.5rem] 2xl:h-[24.6rem] 3xl:h-[30.75rem]">
            <img
              src={image.src}
              alt="Integrated Digital Marketing Capabilities"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <ServicesUis />
      <TrustedPartners />
      <DigitalSolutions />
      <DesignedForScale />
      <PartnerWithQNLHarmony />
    </section>
  );
}
