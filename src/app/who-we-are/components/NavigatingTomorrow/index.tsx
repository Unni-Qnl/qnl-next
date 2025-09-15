"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { QUERY_KEY } from "@/constants/app-query-keys";
import { useLazyBackground } from "@/core/hooks/useLazyBackground";
import { ApiResponse } from "@/types/global.type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {};

export interface TContentData {
  id: number;
  slug: string;
  name: string;
  designation: string;
  title: string;
  image: string;
  blur_image: string;
  content: string;
  created_at: string;
}

export default function NavigatingTomorrow({}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLImageElement>();

  const getContent = async () => {
    try {
      const response = (
        await axios<ApiResponse<TContentData[]>>(APP_API_ROUTES.content, {
          params: {
            paginate: false,
          },
        })
      ).data;

      if (response?.data?.results && response?.status) {
        return response?.data?.results[0];
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useQuery({
    queryKey: [QUERY_KEY.content],
    queryFn: getContent,
  });

  return (
    <div className={`bg-white ${data ? "block" : "hidden"}`}>
      <div className="container py-[1.4rem] md:py-[4.25rem] lg:py-[5.667rem] xl:py-[7.083rem] 2xl:py-[8.5rem] 3xl:py-[10.625rem] text-black grid gap-2 md:grid-cols-2">
        <div className="flex items-center justify-between px-4">
          <h4 className="font-light text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            {data?.title}
          </h4>
          <img
            ref={ref}
            className="grayscale h-[10.358rem] md:h-[18.5rem] lg:h-[24.667rem] xl:h-[30.833rem] 2xl:h-[37rem] 3xl:h-[46.25rem]"
            src={isVisible ? data?.image : data?.blur_image}
            alt={data?.designation}
            loading="lazy"
          />
        </div>
        <div className="p-2 md:p-[0.8rem] lg:p-[1.067rem] xl:p-[1.333rem] 2xl:p-[1.6rem] 3xl:p-[2rem] grid place-items-center">
          <div>
            <div
              className="ql-editor !p-0 !m-0"
              dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
            />
            <p className="font-semibold text-[0.392rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2.5 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
              {data?.name} /  {data?.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
