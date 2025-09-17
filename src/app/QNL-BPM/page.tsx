import QnlBpmBanner from "./components/QnlBpmBanner";
import ServiceWeOffer from "./components/ServiceWeOffer";
import IndustriesWeServe from "./components/IndustriesWeServe";
import WhyChooseQnlBpm from "./components/WhyChooseQnlBpm";
import GetStarted from "./components/GetStarted";
import { Metadata } from "next";
import { COMMON_API_URL } from "@/constants";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "qnl_bpm");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "QNL BPM",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default function QnlBpm({}: Props) {
  return (
    <section>
      <QnlBpmBanner />
      <ServiceWeOffer />
      <IndustriesWeServe />
      <WhyChooseQnlBpm />
      <GetStarted />
    </section>
  );
}
