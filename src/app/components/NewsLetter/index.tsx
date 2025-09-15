"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsLetterCard from "../NewsLetterCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ApiResponse } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";
import type { TNewsLetter } from "@/types/modules.types";
import { QUERY_KEY } from "@/constants/app-query-keys";

export default function NewsLetter() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.newsLetter],
    queryFn: async () => {
      try {
        const response = (
          await axios<ApiResponse<TNewsLetter[]>>(
            `${APP_API_ROUTES.newsLetter}`,
            {
              params: {
                paginate: false,
              },
            },
          )
        ).data;
        if (response?.data && response?.status) {
          return response?.data?.results;
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <h3 className="text-[0.875rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
        QNL Newsletter
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full container md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]"
      >
        <CarouselContent>
          {data &&
            data?.map((item) => <NewsLetterCard key={item?.id} item={item} />)}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}
