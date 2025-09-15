type Props = {};

export default function RoleCardSkeleton({}: Props) {
  return (
    <div className="animate-pulse cursor-pointer w-full border-[1px] border-[#C7C7C7] p-1 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]">
      <div className="bg-[#E0E0E0] rounded w-[60%] h-[12px] md:h-[0.45rem] lg:h-[0.6rem] xl:h-[0.75rem] 2xl:h-[0.9rem] 3xl:h-[1.125rem]"></div>

      <div className="bg-[#E0E0E0] rounded w-[80%] h-[14px] md:h-[0.6rem] lg:h-[0.8rem] xl:h-[1rem] 2xl:h-[1.2rem] 3xl:h-[1.5rem] mt-4 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]"></div>

      <div className="grid gap-1 md:gap-[0.2rem] lg:gap-[0.267rem] xl:gap-[0.333rem] 2xl:gap-[0.4rem] 3xl:gap-[0.5rem] mt-2 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
        <div className="bg-[#E0E0E0] rounded w-[50%] h-[12px] md:h-[0.45rem] lg:h-[0.6rem] xl:h-[0.75rem] 2xl:h-[0.9rem] 3xl:h-[1.125rem]"></div>
        <div className="bg-[#E0E0E0] rounded w-[70%] h-[12px] md:h-[0.45rem] lg:h-[0.6rem] xl:h-[0.75rem] 2xl:h-[0.9rem] 3xl:h-[1.125rem]"></div>
      </div>
    </div>
  );
}
