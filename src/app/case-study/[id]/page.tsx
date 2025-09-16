import CaseStudyDetailsBanner from "./components/CaseStudyDetailsBanner";
import CaseStudyContent from "./components/CaseStudyContent";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { DetailApiResponse } from "@/types/global.type";
import axios from "axios";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const res = (
    await axios.get<DetailApiResponse<any>>(APP_API_ROUTES.caseStudy, {
      params: { slug: id },
    })
  ).data.data;

  return {
    title: res?.heading,
    description: res?.short_description,
    openGraph: {
      title: res?.heading,
      description: res?.short_description,
      url: `https://qnlsoftware.com/case-study/${id}`,
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

export default async function CaseStudyDetails({ params }: Props) {
  const { id } = params;

  const res = await axios.get<DetailApiResponse<any>>(
    APP_API_ROUTES.caseStudy,
    {
      params: { slug: id },
    },
  );

  const data = res.data?.data ?? null;

  return (
    <>
      <CaseStudyDetailsBanner data={data} />
      <CaseStudyContent data={data} />
      <StayConnectedWithUs />
    </>
  );
}
