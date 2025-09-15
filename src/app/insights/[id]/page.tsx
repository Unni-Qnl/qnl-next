"use client";

import React, { use } from "react";
import InsightsDetailsBanner from "./components/InsightsDetailsBanner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DetailApiResponse } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { TInsight } from "../insights.types";
import InsightsContent from "./components/InsightsContent";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";

type Props = {
  params: Promise<{ id: string }>;
};

export default function InsightsDetails({ params }: Props) {
  const { id } = use(params);

  const { data } = useQuery({
    queryKey: ["INSIGHTS_DETAILS", id],
    queryFn: async () => {
      try {
        const response = (
          await axios<DetailApiResponse<TInsight>>(
            `${APP_API_ROUTES.insights}`,
            {
              params: {
                slug: id,
              },
            },
          )
        ).data;
        if (response?.data && response?.status) {
          return response?.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <section>
      <InsightsDetailsBanner data={data as TInsight} />
      <InsightsContent data={data as TInsight} />
      <StayConnectedWithUs />
    </section>
  );
}
