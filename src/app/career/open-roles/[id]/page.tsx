import { ApiResponse, DetailApiResponse } from "@/types/global.type";
import axios from "axios";
import { TJob } from "../components/RolesListing";
import { APP_API_ROUTES } from "@/apis/api-routes";
import JobDetailsHeader from "./components/JobDetailsHeader";
import JobDescription from "./components/JobDescription";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const response = await axios<ApiResponse<TJob[]>>(
    `${APP_API_ROUTES.jobListing}`,
    {
      params: { paginate: false },
    },
  );

  return response?.data?.data?.results?.map((job) => ({
    id: job.id?.toString(),
  }));
}

export default async function JobDetails({ params }: Props) {
  const { id } = params;
  const response = (
    await axios<DetailApiResponse<TJob>>(`${APP_API_ROUTES.jobListing}`, {
      params: {
        slug: id,
      },
    })
  ).data;

  const data = response?.data ?? null;

  return (
    <section>
      <JobDetailsHeader data={data} />
      <JobDescription data={data} />
    </section>
  );
}
