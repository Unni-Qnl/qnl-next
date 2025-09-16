"use client";

import InsightsCarousel from "@/ui/InsightsCarousel";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {};

export default function LearnMoreContent({}: Props) {
  const words = ["delivery.", "service.", "partnership.", "expectation."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container my-8 md:my-0 py-8 md:py-[5rem] lg:py-[6.667rem] xl:py-[8.333rem] 2xl:py-[10rem] 3xl:py-[12.5rem]">
        <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          This is more than a blog — it’s a reflection of how we approach
          transformation, challenge assumptions, and build what’s next.
        </p>
      </div>

      <div className="container grid gap-8 md:gap-[1rem] lg:gap-[1.333rem] xl:gap-[1.667rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem]">
        <div>
          <div>
            <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
              Founder’s Insight
            </h4>
            <p className="mt-1 md:mt-2 text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
              The convergence of Artificial Intelligence and Cloud technologies
              is redefining the boundaries of what businesses can achieve. At
              QNL Software, we don’t just implement AI or migrate to cloud
              platforms — we engineer intelligence into the core of business
              strategy to unlock sustained competitive advantage.
            </p>
            <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
              In today’s hyper-connected, data-driven landscape, organizations
              must move beyond tactical adoption. They must embed AI and cloud
              capabilities as foundational pillars for innovation, operational
              resilience, and customer-centricity.
            </p>
          </div>
          <div className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-5 md:mt-6">
            <p>Strategic AI: From Automation to Augmentation</p>
            <p>
              AI is often misunderstood as merely automation — replacing human
              tasks with algorithms. While automation drives efficiency, the
              true promise lies in augmentation: amplifying human
              decision-making with predictive insights, contextual awareness,
              and adaptive learning.
            </p>
          </div>
          <div className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-5 md:mt-6">
            <p>
              QNL Software partners with clients to architect AI ecosystems that
              evolve with the business — from intelligent process automation to
              advanced analytics that reveal new growth vectors.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Cloud as a Catalyst for Agility
          </h4>
          <p className="mt-1 md:mt-2 text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            Cloud platforms are no longer just infrastructure choices — they are
            enablers of business agility. By leveraging multi-cloud and hybrid
            architectures, we help enterprises accelerate time-to-market,
            optimize costs, and scale seamlessly. Our consulting leadership
            focuses on aligning cloud strategies with business imperatives —
            ensuring cloud adoption is not an IT project but a driver of
            enterprise transformation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Consulting Leadership in the Digital Era
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-1 md:mt-2 text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] gap-4">
            <div>
              <p>
                True leadership in consulting today means synthesizing
                technology with business insight, risk management, and
                organizational change. At QNL Software, we deliver this through:
              </p>
            </div>
            <ul className="grid gap-4 md:gap-[1.6rem] lg:gap-[2.133rem] xl:gap-[2.667rem] 2xl:gap-[3.2rem] 3xl:gap-[4rem] mt-4">
              <li className="pl-2 md:pl-[0.6rem] lg:pl-[0.8rem] xl:pl-[1rem] 2xl:pl-[1.2rem] 3xl:pl-[1.5rem] border-l-2 border-l-primary">
                A consultative approach that challenges assumptions and reframes
                problems.
              </li>
              <li className="pl-2 md:pl-[0.6rem] lg:pl-[0.8rem] xl:pl-[1rem] 2xl:pl-[1.2rem] 3xl:pl-[1.5rem] border-l-2 border-l-primary">
                Cross-disciplinary teams that blend technical expertise with
                industry knowledge.
              </li>
              <li className="pl-2 md:pl-[0.6rem] lg:pl-[0.8rem] xl:pl-[1rem] 2xl:pl-[1.2rem] 3xl:pl-[1.5rem] border-l-2 border-l-primary">
                Outcome-driven engagements where success is measured in business
                impact, not just deliverables.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Closing Perspective
          </h4>
          <p className="mt-1 md:mt-2 text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            AI and Cloud are reshaping industries — but only those who lead with
            strategic intent will capitalize fully. At QNL Software, we don’t
            just help you adopt technology; we help you lead the transformation
            that technology enables.
          </p>
        </div>
      </div>

      <div className="container py-8 ">
        <div className="py-[3.791rem] md:py-[6.8rem] lg:py-[9.067rem] xl:py-[11.333rem] 2xl:py-[13.6rem] 3xl:py-[17rem] px-8 md:px-[5.5rem] lg:px-[7.333rem] xl:px-[9.167rem] 2xl:px-[11rem] 3xl:px-[13.75rem]">
          <h2 className="font-light text-[1.68rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] 3xl:text-[7.5rem]">
            Build
          </h2>
          <h2 className="font-light md:h-[4.1rem] lg:h-[5.467rem] xl:h-[6.833rem] 2xl:h-[8.2rem] 3xl:h-[10.25rem] overflow-hidden text-[1.68rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] 3xl:text-[7.5rem]">
            beyond
            <span className="text-primary overflow-hidden ml-2 md:ml-[0.8rem] lg:ml-[1.067rem] xl:ml-[1.333rem] 2xl:ml-[1.6rem] 3xl:ml-[2rem] md:w-[15.5rem] lg:w-[20.667rem] xl:w-[25.833rem] 2xl:w-[31rem] 3xl:w-[38.75rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </div>
      </div>

      <InsightsCarousel />
      <div className="my-8 md:my-[2.6rem] lg:my-[3.467rem] xl:my-[4.333rem] 2xl:my-[5.2rem] 3xl:my-[6.5rem]">
        <StayConnectedWithUs />
      </div>
    </>
  );
}
