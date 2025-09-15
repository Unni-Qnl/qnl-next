"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { appRoutes } from "@/core/approutes";
import { TNewsLetter } from "@/types/modules.types";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type Props = {
  item: TNewsLetter;
};

export default function NewsLetterCard({ item }: Props) {
  const router = useRouter();

  const handleNavigate = () =>
    router.push(`${appRoutes.qnlnewsletter}/${item?.slug}`);

  return (
    <CarouselItem
      className="cursor-pointer md:basis-1/2 lg:basis-1/3"
      onClick={handleNavigate}
    >
      <div>
        <p className="text-[#949494] text-[0.625rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
          {dayjs(item?.created_at).format("MMMM D, YYYY")}
        </p>
        <p className="font-semibold text-[0.75rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem] mt-2 md:mt-[0.425rem] lg:mt-[0.567rem] xl:mt-[0.708rem] 2xl:mt-[0.85rem] 3xl:mt-[1.063rem]">
          {item?.heading}
        </p>
      </div>
    </CarouselItem>
  );
}
