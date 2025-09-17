import InsightsCard from "./components/InsightsCard";
import { TInsight } from "./insights.types";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";
import InsightsBanner from "./components/InsightsBanner";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { ApiResponse } from "@/types/global.type";
import axios from "axios";
import { COMMON_API_URL } from "@/constants";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "insight");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "Insights",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default async function Insights({}: Props) {
  const response = (
    await axios<ApiResponse<TInsight[]>>(`${APP_API_ROUTES.insights}`, {
      params: { paginate: false },
    })
  ).data;

  const data = response?.data?.results;

  return (
    <>
      <InsightsBanner />
      <div className="container grid md:grid-cols-3 gap-[1.313rem] md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
        {data?.map((data) => (
          <InsightsCard key={data?.id} data={data as TInsight} />
        ))}
      </div>
      <div className="py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
        <StayConnectedWithUs />
      </div>
    </>
  );
}
