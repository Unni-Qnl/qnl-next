type Data = {
  title: string;
  description: string;
};

type Props = {
  data: Data;
};

export default function OurApproachCard({ data }: Props) {
  return (
    <div className="p-[1px] bg-gradient-to-b from-[#FF3300] to-transparent">
      <div className="bg-black p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem] flex flex-col md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] 2xl:gap-[1.2rem] 3xl:gap-[1.5rem] h-[6.977rem] md:h-[8.35rem] lg:h-[11.133rem] xl:h-[13.917rem] 2xl:h-[16.7rem] 3xl:h-[20.875rem]">
        <div className="h-[100%] md:max-h-[2.75rem] lg:max-h-[3.667rem] xl:max-h-[4.583rem] 2xl:max-h-[5.5rem] 3xl:max-h-[6.875rem]">
          <h4 className="flex-1 text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            {data?.title}
          </h4>
        </div>
        <div className="">
          <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
