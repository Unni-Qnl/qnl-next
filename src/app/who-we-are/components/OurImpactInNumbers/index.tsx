const OUR_IMPACT_IN_NUMBERS = [
  {
    id: 1,
    count: "40%",
    description: "Reduction in time-to-market for client products",
  },
  {
    id: 2,
    count: "35%",
    description: "Improvement in operational efficiency",
  },
  {
    id: 3,
    count: "24/7",
    description: "Real-time analytics & monitoring for global clients",
  },
  {
    id: 4,
    count: "99.9%",
    description: "System uptime and reliability ensured",
  },
];

type Props = {};

export default function OurImpactInNumbers({}: Props) {
  return (
    <div className="container py-8 md:py-0 md:pt-[3.425rem] lg:pt-[4.567rem] xl:pt-[5.708rem] 2xl:pt-[6.85rem] 3xl:pt-[8.563rem] md:pb-[2.6rem] lg:pb-[3.467rem] xl:pb-[4.333rem] 2xl:pb-[5.2rem] 3xl:pb-[6.5rem]">
      <div>
        <h4 className="content-title">Our Impact in Numbers</h4>
        <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2">
          Driving measurable transformation through technology and innovation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-[1.6rem] lg:gap-[2.133rem] xl:gap-[2.667rem] 2xl:gap-[3.2rem] 3xl:gap-[4rem] mt-2 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]">
          {OUR_IMPACT_IN_NUMBERS?.map((data) => (
            <div key={data?.id}>
              <p className="text-[2rem] md:text-[2.5rem] lg:text-[3.333rem] xl:text-[4.167rem] 2xl:text-[5rem] 3xl:text-[6.25rem] text-primary">
                {data?.count}
              </p>
              <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-1.5">
                {data?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
