"use client";

import stayConnectedWithus from "@/assets/app/stay-connected-with-us.gif";
import { appRoutes } from "@/core/approutes";
import { useRouter } from "next/navigation";

type Props = {};

export default function StayConnectedWithUs({}: Props) {
  const router = useRouter();
  const handleNavigate = () => router.push(appRoutes.contactus);

  return (
    <div className="px-4 md:px-[2.5rem] lg:px-[3.333rem] xl:px-[4.167rem] 2xl:px-[5rem] 3xl:px-[6.25rem]">
      <div
        style={{
          background: `linear-gradient(180deg, #141414 0%, #0B0B0B 100%)`,
        }}
        className="p-[1px] rounded-[4px] md:rounded-[0.453rem] lg:rounded-[0.604rem] xl:rounded-[0.755rem] 2xl:rounded-[0.905rem] 3xl:rounded-[1.132rem] overflow-hidden"
      >
        <div className="flex items-center bg-black">
          <div className="pt-6 pb-6 pl-6 md:pl-[2.5rem] lg:pl-[3.333rem] xl:pl-[4.167rem] 2xl:pl-[5rem] 3xl:pl-[6.25rem] flex-1">
            <div className="max-w-[15.438rem] md:max-w-[20.68rem] lg:max-w-[27.573rem] xl:max-w-[34.466rem] 2xl:max-w-[41.359rem] 3xl:max-w-[51.699rem]">
              <h5 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
                Stay Connected with Us
              </h5>
              <p className="text-[0.625rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] mt-2 md:mt-[0.675rem] lg:mt-[0.9rem] xl:mt-[1.125rem] 2xl:mt-[1.35rem] 3xl:mt-[1.688rem]">
                Let’s stay in touch! Tell us about your expertise and ambitions,
                and we’ll ensure you’re updated on opportunities and events that
                align with your goals.
              </p>
              <button
                onClick={handleNavigate}
                className="cursor-pointer mt-2.5 md:mt-[1.131rem] lg:mt-[1.509rem] xl:mt-[1.886rem] 2xl:mt-[2.263rem] 3xl:mt-[2.829rem] text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] font-semibold text-white bg-primary px-4 py-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="size-[8.952rem] md:size-[15.474rem] lg:size-[20.632rem] xl:size-[25.79rem] 2xl:size-[30.949rem] 3xl:size-[38.686rem]">
            <img
              className="w-full h-full"
              src={stayConnectedWithus?.src}
              alt="stay-connected-with-us"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
