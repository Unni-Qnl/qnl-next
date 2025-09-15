import weSupport from "@/assets/csrandsustainability/we-support.svg";

export default function CollaborationsForChange() {
  return (
    <div className="container my-8 md:my-[2rem] lg:my-[2.667rem] xl:my-[3.333rem] 2xl:my-[4rem] 3xl:my-[5rem] py-3 md:py-[1.4rem] lg:py-[1.867rem] xl:py-[2.333rem] 2xl:py-[2.8rem] 3xl:py-[3.5rem]">
      <div className="flex gap-2 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
        <img
          className="w-[3.938rem] md:w-[6.4rem] lg:w-[8.533rem] xl:w-[10.667rem] 2xl:w-[12.8rem] 3xl:w-[16rem] h-[4.625rem] md:h-[7.5rem] lg:h-[10rem] xl:h-[12.5rem] 2xl:h-[15rem] 3xl:h-[18.75rem] object-cover"
          src={weSupport.src}
          alt="weSupport"
        />
        <div>
          <h4 className="text-primary font-semibold text-[14px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Collaborations for Change
          </h4>
          <p className="text-[12px] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem] mt-2 ">
            Our partnerships amplify our impact. By working with mission-driven
            clients, ethical vendors, and local communities, we bring
            sustainability into every phase of the digital ecosystem — from
            ideation to delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
