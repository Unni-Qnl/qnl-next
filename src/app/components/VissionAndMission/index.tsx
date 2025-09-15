import vision from "@/assets/home/vision.webp";
import mission from "@/assets/home/mission.webp";

type Props = {};

export default function VissionAndMission({}: Props) {
  return (
    <div>
      <div className="bg-primary p-6 md:px-[5rem] lg:px-[6.667rem] xl:px-[8.333rem] 2xl:px-[10rem] 3xl:px-[12.5rem] md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem] flex items-center gap-[1.375rem] md:gap-[2.5rem] lg:gap-[3.333rem] xl:gap-[4.167rem] 2xl:gap-[5rem] 3xl:gap-[6.25rem]">
        <div className="flex-1">
          <h3 className="text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            VISION
          </h3>
          <p className="text-[0.75rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem] md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
            To empower businesses globally by building transformative IT
            solutions that go beyond technology — driving growth, innovation,
            and long-term impact.
          </p>
        </div>
        <div className="w-[7.839rem] md:w-[14rem] lg:w-[18.667rem] xl:w-[23.333rem] 2xl:w-[28rem] 3xl:w-[35rem] h-[5.125rem] md:h-[8rem] lg:h-[10.667rem] xl:h-[13.333rem] 2xl:h-[16rem] 3xl:h-[20rem]">
          <img
            className="w-full h-full object-cover"
            src={vision.src}
            alt="vision"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-white p-6 md:px-[5rem] lg:px-[6.667rem] xl:px-[8.333rem] 2xl:px-[10rem] 3xl:px-[12.5rem] md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem] flex items-center gap-[1.375rem] md:gap-[2.5rem] lg:gap-[3.333rem] xl:gap-[4.167rem] 2xl:gap-[5rem] 3xl:gap-[6.25rem]">
        <div className="flex-1">
          <h3 className="text-black text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            MISSION
          </h3>
          <p className="text-black text-[0.75rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem] md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
            At QNL Software, our mission is to deliver complete business IT
            solutions through strategic consulting, custom technology, and a
            deep commitment to our clients’ success.
          </p>
        </div>
        <div className="w-[7.839rem] md:w-[14rem] lg:w-[18.667rem] xl:w-[23.333rem] 2xl:w-[28rem] 3xl:w-[35rem] h-[5.125rem] md:h-[8rem] lg:h-[10.667rem] xl:h-[13.333rem] 2xl:h-[16rem] 3xl:h-[20rem]">
          <img
            className="w-full h-full object-cover"
            src={mission.src}
            alt="mission"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
