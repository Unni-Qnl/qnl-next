"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { COMMON_API_URL } from "@/constants";
import { QUERY_KEY } from "@/constants/app-query-keys";
import { ApiResponse } from "@/types/global.type";
import { TCaseStudy } from "@/types/modules.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCaseStudy() {
  console.log(COMMON_API_URL);

  return useQuery({
    queryKey: [QUERY_KEY.caseStudy],
    queryFn: async () => {
      try {
        const response = (
          await axios<ApiResponse<TCaseStudy[]>>(
            `${APP_API_ROUTES.caseStudy}`,
            { params: { paginate: false } },
          )
        ).data;
        if (response?.data && response?.status) {
          return response?.data?.results;
        }

        return [];
      } catch (error) {
        console.error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
}
