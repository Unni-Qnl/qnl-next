import { Metadata } from "next";
import JoinUsBanner from "./components/JoinUsBanner";
import JoinUsForm from "./components/JoinUsForm";
import { COMMON_API_URL } from "@/constants";

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "join_us");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "Join Our Team",
    description:
      "Find your next opportunity in engineering, product management, or DevOps. Work remotely or at our India headquarters",
    keywords: data?.data?.seo_keywords?.split(),
  };
}

export default function JoinUs() {
  return (
    <section>
      <JoinUsBanner />
      <JoinUsForm />
    </section>
  );
}
