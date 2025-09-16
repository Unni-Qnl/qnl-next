import NewsLetterDetailsBanner from "./components/NewsLetterDetailsBanner";
import { DetailApiResponse } from "@/types/global.type";
import { TNewsLetter } from "@/types/modules.types";
import { APP_API_ROUTES } from "@/apis/api-routes";
import axios from "axios";

type Props = {
  params: { id: string };
};

export default async function NewsLetterDetails({ params }: Props) {
  const { id } = params;

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

  const data = response?.data ?? null;

  return (
    <>
      <NewsLetterDetailsBanner data={data as TNewsLetter} />
    </>
  );
}
