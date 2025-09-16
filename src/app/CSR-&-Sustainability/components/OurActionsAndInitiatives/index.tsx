"use client";

import InitiativeCard from "../InitiativeCard";

const initiativeData = [
  {
    title: "Environmentally Responsible Practices",
    children: [
      {
        text: "We actively reduce our digital carbon footprint through:",
        children: [
          {
            text: "Efficient coding and low-energy consuming backend architectures.",
          },
          {
            text: "Cloud-first deployments using green-certified data centers.",
          },
          { text: "Remote-first workforce model to reduce travel emissions." },
        ],
      },
      {
        text: "Moving towards paperless operations across our offices and processes.",
      },
    ],
  },
  {
    title: "Employee Empowerment",
    children: [
      {
        text: "Regular training on ethical tech, cybersecurity, and sustainability awareness.",
      },
      {
        text: "Internal programs for diversity, wellness, and inclusion.",
      },
      {
        text: "Encouragement of community volunteering and skill-based giving.",
      },
    ],
  },
  {
    title: "Ethical Business Conduct",
    children: [
      {
        text: "Strict adherence to anti-corruption policies.",
      },
      {
        text: "Implementation of fair hiring, equal opportunity, and zero-discrimination practices.",
      },
      {
        text: "Transparent procurement policies and vendor ethics standards.",
      },
    ],
  },
  {
    title: "Inclusive Digital Innovation",
    children: [
      {
        text: "Building accessible and inclusive software for all users, regardless of ability.",
      },
      {
        text: "Partnering with socially conscious clients and projects.",
      },
      {
        text: "Using AI and automation ethically, with human oversight and fairness at the core.",
      },
    ],
  },
];

export default function OurActionsAndInitiatives() {
  return (
    <div className="container my-8 md:my-[2rem] lg:my-[2.667rem] xl:my-[3.333rem] 2xl:my-[4rem] 3xl:my-[5rem] py-8 md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem]">
      <h4 className="font-semibold text-[14px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
        Our Actions & Initiatives
      </h4>
      <div className="grid md:grid-cols-2 gap-2.5 md:gap-[1.2rem] lg:gap-[1.6rem] xl:gap-[2rem] 2xl:gap-[2.4rem] 3xl:gap-[3rem]  mt-2 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
        {initiativeData?.map((item, index) => (
          <InitiativeCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
