import OurApproachCard from "../OurApproachCard";

const OUR_APPROACH = [
  {
    id: 1,
    title: "Strategy-First",
    description:
      "We challenge assumptions and co-create visions with our clients.",
  },
  {
    id: 2,
    title: "Outcome Ownership",
    description:
      "We take accountability for your success, not just project delivery.",
  },
  {
    id: 3,
    title: "Agile & Scalable",
    description:
      "Our solutions evolve with your business, ensuring long-term relevance.",
  },
  {
    id: 4,
    title: "Collaborative Partnership",
    description:
      "We embed with your teams as trusted advisors and execution partners.",
  },
];

type Props = {};

export default function OurApproach({}: Props) {
  return (
    <div className="container py-8 md:py-[3.425rem] lg:py-[4.567rem] xl:py-[5.708rem] 2xl:py-[6.85rem] 3xl:py-[8.563rem]">
      <div>
        <h4 className="content-title">Our Approach</h4>
        <p className="content-para">
          We start every engagement with a strategic lens — focusing on business
          goals, market dynamics, and ecosystem impacts before designing
          technology solutions. Our approach integrates deep consulting
          expertise with agile development and cutting-edge technology to
          deliver outcomes, not just outputs.
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8 md:mt-[1.6rem] lg:mt-[2.133rem] xl:mt-[2.667rem] 2xl:mt-[3.2rem] 3xl:mt-[4rem] gap-[1.5rem] md:gap-[1rem] lg:gap-[1.333rem] xl:gap-[1.667rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem]">
          {OUR_APPROACH?.map((data) => (
            <OurApproachCard key={data?.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
