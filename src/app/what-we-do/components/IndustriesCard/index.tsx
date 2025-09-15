"use client";

import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Props = {
  image: string;
  bluredImage: string;
  title: string;
  description: string;
};

export default function IndustriesCard({
  bluredImage,
  description,
  image,
  title,
}: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible ? `url(${image})` : `url(${bluredImage})`,
      }}
      className="cursor-pointer h-[15.75rem] md:h-[13.275rem] lg:h-[17.7rem] xl:h-[22.125rem] 2xl:h-[26.55rem] 3xl:h-[33.188rem] bg-cover bg-center bg-no-repeat"
    >
      <div
        style={{
          background: `
        linear-gradient(180deg, rgba(0, 0, 0, 0) 42.09%, #000000 100%),
        linear-gradient(342.99deg, rgba(0, 0, 0, 0) 80.59%, rgba(0, 0, 0, 0.7) 98.15%),
        linear-gradient(338.41deg, rgba(255, 51, 0, 0) 58.29%, rgba(255, 51, 0, 0.4) 97.13%)
      `,
        }}
        className="w-full h-full overflow-hidden"
      >
        <div className="w-full h-full hover:bg-primary p-[0.712rem] md:p-[0.6rem] lg:p-[0.8rem] xl:p-[1rem] 2xl:p-[1.2rem] 3xl:p-[1.5rem] transition-colors duration-300 group">
          <p className="uppercase font-bold text-[0.625rem] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem] border-b-[1px] w-fit border-b-primary">
            {title}
          </p>
          <p className="font-semibold mt-6 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem] text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
