"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { QUERY_KEY } from "@/constants/app-query-keys";
import { ApiResponse } from "@/types/global.type";
import { TInsight } from "@/types/modules.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useInsights() {
  return useQuery({
    queryKey: [QUERY_KEY.insights],
    queryFn: async () => {
      try {
        const response = (
          await axios<ApiResponse<TInsight[]>>(`${APP_API_ROUTES.insights}`, {
            params: { paginate: false },
          })
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
