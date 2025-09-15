"use client";

import React, { use } from "react";
import CaseStudyDetailsBanner from "./components/CaseStudyDetailsBanner";
import CaseStudyContent from "./components/CaseStudyContent";
import StayConnectedWithUs from "@/ui/StayConnectedWithUs";
import { useQuery } from "@tanstack/react-query";
import { DetailApiResponse } from "@/types/global.type";
import axios from "axios";
import { APP_API_ROUTES } from "@/apis/api-routes";

type Props = {
  params: Promise<{ id: string }>;
};

export default function CaseStudyDetails({ params }: Props) {
  const { id } = use(params);

  const { data } = useQuery({
    queryKey: ["CASE_STUDY_DETAILS", id],
    queryFn: async () => {
      try {
        const response = (
          await axios<DetailApiResponse<any>>(`${APP_API_ROUTES.caseStudy}`, {
            params: {
              slug: id,
            },
          })
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
    <div>
      <CaseStudyDetailsBanner data={data} />
      <CaseStudyContent data={data} />
      <StayConnectedWithUs />
    </div>
  );
}
