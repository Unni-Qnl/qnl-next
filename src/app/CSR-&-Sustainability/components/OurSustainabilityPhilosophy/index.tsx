import people from "@/assets/csrandsustainability/people.svg";
import planet from "@/assets/csrandsustainability/planet.svg";
import purpose from "@/assets/csrandsustainability/purpose.svg";
import SustainabilityCard from "../SustainabilityCard";

const philosophyData = [
  {
    id: 1,
    title: "people",
    icon: people.src,
    description:
      "Fostering inclusive, diverse, and ethical workplaces and digital environments.",
  },
  {
    id: 2,
    title: "planet",
    icon: planet.src,
    description:
      "Minimizing our environmental impact through responsible resource usage and digital sustainability.",
  },
  {
    id: 3,
    title: "purpose",
    icon: purpose.src,
    description:
      "Ensuring our products and partnerships contribute to long-term social and economic progress.",
  },
];

export default function OurSustainabilityPhilosophy() {
  return (
    <div className="bg-white text-black">
      <div className="container py-8 md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem]">
        <div>
          <h4 className="text-primary font-light text-[14px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Our Sustainability <br /> Philosophy
          </h4>
          <p className="text-[#878787] text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[0.2rem] lg:mt-[0.267rem] xl:mt-[0.333rem] 2xl:mt-[0.4rem] 3xl:mt-[0.5rem]">
            We believe that technology can be a powerful driver of positive
            change. Our sustainability commitment is grounded in three pillars:
          </p>
        </div>
        <div className="mt-4 md:mt-[2rem] lg:mt-[2.667rem] xl:mt-[3.333rem] 2xl:mt-[4rem] 3xl:mt-[5rem] grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] 2xl:gap-[1.2rem] 3xl:gap-[1.5rem]">
          {philosophyData?.map((item) => (
            <SustainabilityCard key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
