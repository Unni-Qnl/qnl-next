type Props = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export default function SustainabilityCard({
  description,
  icon,
  title,
}: Props) {
  return (
    <div className="p-1 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">
      <div className="size-8 md:size-[2rem] lg:size-[2.667rem] xl:size-[3.333rem] 2xl:size-[4rem] 3xl:size-[5rem]">
        <img
          src={icon}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mt-1 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
        <h6 className="font-bold text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
          {title}
        </h6>
        <p className="text-[#545454] text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
