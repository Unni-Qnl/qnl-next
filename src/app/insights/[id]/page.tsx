import InsightsDetailsBanner from "./components/InsightsDetailsBanner";
import axios from "axios";
import { DetailApiResponse } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { TInsight } from "../insights.types";
import InsightsContent from "./components/InsightsContent";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const res = (
    await axios.get<DetailApiResponse<TInsight>>(APP_API_ROUTES.insights, {
      params: { slug: id },
    })
  ).data.data;

  return {
    title: res?.heading,
    description: res?.short_description,
    openGraph: {
      title: res?.heading,
      description: res?.short_description,
      url: `https://qnlsoftware.com/insights/${id}`,
      type: "website",
      images: [{ url: res?.image }],
    },
    twitter: {
      title: res?.heading,
      description: res?.short_description,
      images: [{ url: res?.image }],
    },
  };
}

export default async function InsightsDetails({ params }: Props) {
  const { id } = params;

  const response = (
    await axios<DetailApiResponse<TInsight>>(`${APP_API_ROUTES.insights}`, {
      params: {
        slug: id,
      },
    })
  ).data;

  const data = response?.data ?? null;

  return (
    <section>
      <InsightsDetailsBanner data={data as TInsight} />
      <InsightsContent data={data as TInsight} />
      <StayConnectedWithUs />
    </section>
  );
}
