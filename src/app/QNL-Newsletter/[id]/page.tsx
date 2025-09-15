"use client";

import React, { use } from "react";
import NewsLetterDetailsBanner from "./components/NewsLetterDetailsBanner";
import { useQuery } from "@tanstack/react-query";
import { DetailApiResponse } from "@/types/global.type";
import { TNewsLetter } from "@/types/modules.types";
import { APP_API_ROUTES } from "@/apis/api-routes";
import axios from "axios";

type Props = {
  params: Promise<{ id: string }>;
};

export default function NewsLetterDetails({ params }: Props) {
  const { id } = use(params);
  const { data } = useQuery({
    queryKey: ["NEWS_LETTER_DETAILS", id],
    queryFn: async () => {
      try {
        const response = (
          await axios<DetailApiResponse<TNewsLetter>>(
            `${APP_API_ROUTES.newsLetter}`,
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
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <NewsLetterDetailsBanner data={data as TNewsLetter} />
    </>
  );
}
