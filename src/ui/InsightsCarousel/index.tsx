"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InsightCard from "../InsightCard";
import useInsights from "@/hooks/useInsights";

type Props = {};

export default function InsightsCarousel({}: Props) {
  const { data } = useInsights();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container"
    >
      <CarouselContent>
        {data?.map((item) => (
          <InsightCard key={item?.id} {...item} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:left-[-3.5rem] left-[-0.8rem]" />
      <CarouselNext className="md:right-[-3.5rem] right-[-0.8rem]" />
    </Carousel>
  );
}
