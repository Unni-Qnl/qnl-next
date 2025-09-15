import banner from "@/assets/csrandsustainability/sustainability-banner.webp";
import bluredBanner from "@/assets/csrandsustainability/blured-sustainability-banner.png";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";
import Navbar from "@/core/components/Navbar";
import Breadcrumb from "@/ui/Breadcrumb";

export default function CsrAndSustainabilityBanner() {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible
          ? `url(${banner.src})`
          : `url(${bluredBanner.src})`,
      }}
      className="md:h-[27rem] lg:h-[36rem] xl:h-[45rem] 2xl:h-[54rem] 3xl:h-[67.5rem] bg-cover bg-no-repeat w-full bg-center relative"
    >
      <Navbar />
      <div className='before:bg-[linear-gradient(90deg,#000000_13.33%,rgba(0,0,0,0.94)_47.08%,rgba(0,0,0,0.1)_100%),linear-gradient(176.32deg,rgba(0,0,0,0)_69.73%,#000000_95.38%)] h-full inset-0 before:absolute before:inset-0 before:content-[""]'>
        <div className="isolate">
          <div className="container py-[3.121rem] md:py-[1.025rem] lg:py-[1.366rem] xl:py-[1.708rem] 2xl:py-[2.05rem] 3xl:py-[2.56rem]">
            <Breadcrumb />
            <div className="mt-4 md:w-[25.7rem] lg:w-[34.266rem] xl:w-[42.833rem] 2xl:w-[51.4rem] 3xl:w-[64.25rem]">
              <h1 className="text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem] leading-snug">
                For today, for tomorrow, for all.
              </h1>
              <h1 className="font-light text-primary text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem] leading-snug">
                Our responsibility goes beyond technology.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
