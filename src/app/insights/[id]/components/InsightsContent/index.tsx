import InsightsCarousel from "@/ui/InsightsCarousel";
import { TInsight } from "@/app/insights/insights.types";

type Props = {
  data: TInsight;
};

export default function InsightsContent({ data }: Props) {
  return (
    <div className="isolate container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
      />
      <div className="py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
        <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem] mb-1 md:mb-[0.4rem] lg:mb-[0.533rem] xl:mb-[0.667rem] 2xl:mb-[0.8rem] 3xl:mb-[1rem]">
          Related Insights
        </p>
        <InsightsCarousel />
      </div>
    </div>
  );
}
