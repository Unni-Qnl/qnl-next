"use client";

import digitalsolution from "@/assets/harmony/digital-solutions.webp";
import blureddigitalsolution from "@/assets/harmony/blured-digital-solutions.png";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {};

const data = [
  {
    industry: "Retail & Consumer Goods",
    capabilities: "Omnichannel strategy, conversion optimization",
  },
  {
    industry: "Banking & Finance",
    capabilities: "Regulatory-compliant advertising, lead funnels",
  },
  {
    industry: "Healthcare & Life Sciences",
    capabilities: "Ethical patient engagement, lead qualification",
  },
  {
    industry: "SaaS & Technology",
    capabilities: "ABM, organic pipeline generation",
  },
  {
    industry: "Manufacturing & B2B",
    capabilities: "Trade campaign architecture, distributor enablement",
  },
];

export default function DigitalSolutions({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLImageElement>();

  return (
    <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
        Digital Solutions Aligned to Industry Needs
      </h4>
      <img
        className="mt-2 h-[10rem] md:h-[12.3rem] lg:h-[16.4rem] xl:h-[20.5rem] 2xl:h-[24.6rem] 3xl:h-[30.75rem] object-cover object-center w-full"
        ref={ref}
        src={isVisible ? digitalsolution?.src : blureddigitalsolution?.src}
        alt="Digital Solutions Aligned to Industry Needs"
      />
      <div className="mt-1 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem] border-[1px] border-[#555555] p-2 md:p-[1rem] lg:p-[1.333rem] xl:p-[1.667rem] 2xl:p-[2rem] 3xl:p-[2.5rem]">
        <table className="bg-black text-white w-full">
          <thead className="text-[0.75rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            <tr>
              <th className="text-left pb-2 md:pb-[0.4rem] lg:pb-[0.533rem] xl:pb-[0.667rem] 2xl:pb-[0.8rem] 3xl:pb-[1rem] border-b border-white">
                Industry
              </th>
              <th className="text-left pb-2 md:pb-[0.4rem] lg:pb-[0.533rem] xl:pb-[0.667rem] 2xl:pb-[0.8rem] 3xl:pb-[1rem] border-b border-white">
                Capabilities
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className={`${idx !== data?.length - 1 ? "border-b-[0.24px] border-[#787878]" : ""} text-[0.625rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]`}
              >
                <td className="py-2 md:py-[0.8rem] lg:py-[1.067rem] xl:py-[1.333rem] 2xl:py-[1.6rem] 3xl:py-[2rem]">
                  {item.industry}
                </td>
                <td className="py-2 md:py-[0.8rem] lg:py-[1.067rem] xl:py-[1.333rem] 2xl:py-[1.6rem] 3xl:py-[2rem]">
                  {item.capabilities}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
