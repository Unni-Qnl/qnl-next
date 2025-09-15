"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { ApiResponse } from "@/types/global.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {
  type: "privacy_policy" | "terms_and_conditions" | "cookie_policy";
  queryKey: string;
};

type Tpolicy = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export default function usePolicies({ type, queryKey }: Props) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const response = (
          await axios<ApiResponse<Tpolicy[]>>(`${APP_API_ROUTES.policies}`, {
            params: {
              paginate: false,
              type: type,
            },
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
