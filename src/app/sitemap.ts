import { ApiResponse } from "@/types/global.type";
import axios from "axios";
import { MetadataRoute } from "next";
import { TInsight } from "./insights/insights.types";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { TCaseStudy } from "@/types/modules.types";

function toValidDate(ts: number | string | null | undefined): Date | undefined {
  if (ts == null) return undefined;

  // convert string to number if necessary
  const n = typeof ts === "string" ? Number(ts) : ts;
  if (Number.isNaN(n)) return undefined;

  // if it's seconds (10 digits) convert to ms
  const ms = n < 1e12 ? n * 1000 : n;
  const d = new Date(ms);
  return isNaN(d.getTime()) ? undefined : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const insightResponse = (
    await axios<ApiResponse<TInsight[]>>(`${APP_API_ROUTES.insights}`, {
      params: { paginate: false },
    })
  ).data;

  const insights = insightResponse?.data?.results;

  const caseStudiesResponse = (
    await axios<ApiResponse<TCaseStudy[]>>(`${APP_API_ROUTES.caseStudy}`, {
      params: { paginate: false },
    })
  ).data;

  const caseStudies = caseStudiesResponse?.data?.results;

  const insightsEntries: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}insights/${insight.slug.toString()}`,
  }));
  const caseStudiesEntries: MetadataRoute.Sitemap = caseStudies.map(
    (caseStudy) => ({
      url: `${baseUrl}case-study/${caseStudy.slug.toString()}`,
    }),
  );

  const paths = [
    "what-we-do",
    "who-we-are",
    "career",
    "insights",
    "platforms",
    "QNL-BPM",
    "harmony",
    "locations",
    "sitemaps",
    "learn-more",
    "contact-us",
    "join-us",
    "career/open-roles",
  ];

  const staticUrls = paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticUrls, ...insightsEntries, ...caseStudiesEntries];
}
