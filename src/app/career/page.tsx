import CareerBanner from "./components/CareerBanner";
import WhyJoinQnl from "./components/WhyJoinQnl";
import InsideQnl from "./components/InsideQnl";
import CareerPathAndLearning from "./components/CareerPathAndLearning";
import BuildingFuture from "./components/BuildingFuture";
import PartOfOurCommunity from "./components/PartOfOurCommunity";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore tech careers at QNL Software. Shape the digital future with us through exciting roles in development, AI, and cloud services.",
  openGraph: {
    title: "Careers",
    description:
      "Explore tech careers at QNL Software. Shape the digital future with us through exciting roles in development, AI, and cloud services.",
    images: [
      {
        url: "https://qnlpublic.s3.ap-south-1.amazonaws.com/White++in+Black+(1200x630).png",
      },
    ],
    url: "https://qnlsoftware.com/career",
    type: "website",
  },
  twitter: {
    title: "Careers",
    description:
      "Explore tech careers at QNL Software. Shape the digital future with us through exciting roles in development, AI, and cloud services.",
    images: [
      {
        url: "https://qnlpublic.s3.ap-south-1.amazonaws.com/White++in+Black+(1200x630).png",
      },
    ],
  },
};

export default function Career({}: Props) {
  return (
    <section>
      <CareerBanner />
      <div className="container grid gap-8 md:gap-[1.4rem] lg:gap-[1.867rem] xl:gap-[2.333rem] 2xl:gap-[2.8rem] 3xl:gap-[3.5rem]">
        <WhyJoinQnl />
        <InsideQnl />
        <CareerPathAndLearning />
      </div>
      <BuildingFuture />
      <PartOfOurCommunity />
    </section>
  );
}
