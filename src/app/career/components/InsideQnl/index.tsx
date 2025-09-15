import insideQnl from "@/assets/career/inside-qnl.webp";

type Props = {};

export default function InsideQnl({}: Props) {
  return (
    <div className="grid md:grid-cols-2  gap-3.5 md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
      <div className="h-[7.5rem] md:h-[12.3rem] lg:h-[16.4rem] xl:h-[20.5rem] 2xl:h-[24.6rem] 3xl:h-[30.75rem] order-2 md:order-1">
        <img
          className="w-full h-full object-cover"
          src={insideQnl.src}
          alt="inside-qnl"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center order-1 md:order-2">
        <h4 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          Inside QNL
        </h4>
        <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
          Life at QNL is dynamic, inclusive, and designed for balance. Our teams
          work across locations but stay connected through open communication
          and a shared mission. Whether you're remote or in-office, you’ll
          experience a people-first environment with room to thrive.
        </p>
      </div>
    </div>
  );
}
