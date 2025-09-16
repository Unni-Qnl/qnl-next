import PlatformCard from "./components/PlatformCard";
import { ApiResponse } from "@/types/global.type";
import axios from "axios";
import { APP_API_ROUTES } from "@/apis/api-routes";
import PlatformsHeader from "./components/PlatformsHeader";

type Props = {};

export type TPlatform = {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  is_active: boolean;
  image: string;
  url: string;
};

export default async function Platforms({}: Props) {
  const response = (
    await axios.get<ApiResponse<TPlatform[]>>(APP_API_ROUTES.platform, {
      params: { paginate: false },
    })
  ).data;

  const data = response?.data?.results;

  return (
    <section>
      <PlatformsHeader />
      <div className="container grid gap-8 md:gap-0 pt-8 md:pt-0 pb-8 md:pb-[2.6rem] lg:pb-[3.467rem] xl:pb-[4.333rem] 2xl:pb-[5.2rem] 3xl:pb-[6.5rem]">
        {data?.map((platform) => (
          <PlatformCard key={platform.id} data={platform} />
        ))}
      </div>
    </section>
  );
}
