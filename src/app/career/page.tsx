"use client";

import { useMeta } from "@/contexts/MetaContext";
import CareerBanner from "./components/CareerBanner";
import WhyJoinQnl from "./components/WhyJoinQnl";
import InsideQnl from "./components/InsideQnl";
import CareerPathAndLearning from "./components/CareerPathAndLearning";
import BuildingFuture from "./components/BuildingFuture";
import PartOfOurCommunity from "./components/PartOfOurCommunity";

type Props = {};

export default function Career({}: Props) {
  const { value: metaData } = useMeta();
  return (
    <section>
      <CareerBanner />
      <div className="container grid gap-8 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
        <WhyJoinQnl />
        <InsideQnl />
        <CareerPathAndLearning />
      </div>
      <BuildingFuture />
      <PartOfOurCommunity />
    </section>
  );
}
