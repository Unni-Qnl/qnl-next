"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { QUERY_KEY } from "@/constants/app-query-keys";
import { ApiResponse } from "@/types/global.type";
import { TService } from "@/types/modules.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useServices() {
  return useQuery({
    queryKey: [QUERY_KEY.services],
    queryFn: async () => {
      try {
        const response = (
          await axios<ApiResponse<TService[]>>(`${APP_API_ROUTES.services}`, {
            params: { paginate: false },
          })
        ).data;
        if (response?.data && response?.status) {
          return response?.data?.results ?? [];
        }
        return [];
      } catch (error) {
        console.error(error);
      }
    },
    refetchOnWindowFocus: false,
  });
}
