"use client";

import impactImg from "@/assets/csrandsustainability/impact.webp";
import blurediImpactImg from "@/assets/csrandsustainability/blured-impact.webp";
import devGoals from "@/assets/csrandsustainability/deve-goals.webp";
import bluredDevGoals from "@/assets/csrandsustainability/blured-dev-goals.webp";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";

export default function SustainabilityAccountabilityBlock() {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  const { isVisible: isLoaded, ref: secondRef } =
    useLazyBackground<HTMLDivElement>();

  return (
    <div className="grid gap-8 md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
      <div className="px-8 md:p-0">
        <div className="flex flex-col md:flex-row md:items-center gap-3.5 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
          <div
            ref={ref}
            style={{
              backgroundImage: isVisible
                ? `url(${impactImg.src})`
                : `url(${blurediImpactImg.src})`,
            }}
            className="w-full md:w-[18.75rem] lg:w-[25rem] xl:w-[31.25rem] 2xl:w-[37.5rem] 3xl:w-[46.875rem] h-[12.5rem] md:h-[12.5rem] lg:h-[16.667rem] xl:h-[20.833rem] 2xl:h-[25rem] 3xl:h-[31.25rem] bg-cover bg-center bg-no-repeat order-2 md:order-1"
          >
            <div className="w-full h-full bg-[linear-gradient(227.34deg,rgba(255,51,0,0)_26.02%,#FF3300_124.08%)]" />
          </div>
          <div className="order-1 md:order-2 md:flex-1 md:pr-[5rem] lg:pr-[6.667rem] xl:pr-[8.333rem] 2xl:pr-[10rem] 3xl:pr-[12.5rem]">
            <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
              Impact & Accountability
            </h4>
            <div className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] grid gap-2 mt-2">
              <p>
                We measure what matters. Our sustainability performance is
                tracked and aligned with:
              </p>
              <ul className="list-disc list-outside pl-6">
                <li className="font-bold">
                  UNGC Communication on Progress (CoP)
                </li>
                <li>Internal KPIs mapped to SDG indicators</li>
                <li>Partner/vendor compliance audits</li>
              </ul>
              <p>
                We aim for continuous improvement, guided by global benchmarks
                and stakeholder feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 md:p-0">
        <div className="flex flex-col md:flex-row md:items-center gap-3.5 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
          <div
            ref={secondRef}
            style={{
              backgroundImage: isLoaded
                ? `url(${devGoals.src})`
                : `url(${bluredDevGoals.src})`,
            }}
            className="order-1 md:order-2 w-full md:w-[18.75rem] lg:w-[25rem] xl:w-[31.25rem] 2xl:w-[37.5rem] 3xl:w-[46.875rem] h-[12.5rem] md:h-[12.5rem] lg:h-[16.667rem] xl:h-[20.833rem] 2xl:h-[25rem] 3xl:h-[31.25rem] bg-cover bg-center bg-no-repeat"
          />
          <div className="md:flex-1 md:pl-[5rem] lg:pl-[6.667rem] xl:pl-[8.333rem] 2xl:pl-[10rem] 3xl:pl-[12.5rem]">
            <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
              Supporting the UN Sustainable Development Goals
            </h4>
            <div className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] grid gap-2 mt-2">
              <p>
                We are focused on contributing to specific SDGs where our impact
                is most direct:
              </p>
              <ul className="list-disc list-outside pl-6">
                <li>
                  <span className="font-bold">SDG 9: </span> Industry,
                  Innovation, and Infrastructure
                </li>
                <li>
                  <span className="font-bold">SDG 12:</span> Responsible
                  Consumption and Production
                </li>
                <li>
                  <span className="font-bold">SDG 13:</span> Climate Action
                </li>
                <li>
                  <span className="font-bold">SDG 16:</span> Peace, Justice, and
                  Strong Institutions
                </li>
              </ul>
              <p>
                Through our innovations, services, and organizational practices,
                we support the global agenda for a more sustainable and
                equitable world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
