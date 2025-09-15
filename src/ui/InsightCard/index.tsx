import { CarouselItem } from "@/components/ui/carousel";

type Props = {
  slug: string;
  heading: string;
  short_description: string;
  image: string;
};

export default function InsightCard({
  heading,
  image,
  short_description,
  slug,
}: Props) {
  // const { navigateTo } = useCustomNavigation();
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div
        className="cursor-pointer"
        // onClick={() => navigateTo(`${appRoutes.insights}/${slug}`)}
      >
        <p className="font-semibold text-[0.75rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem]">
          {heading}
        </p>
        <div
          style={{ backgroundImage: `url("${image}")` }}
          className="bg-cover bg-no-repeat bg-center h-[8.375rem] md:h-[13.275rem] lg:h-[17.7rem] xl:h-[22.125rem] 2xl:h-[26.55rem] 3xl:h-[33.188rem]"
        >
          <div
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.09%, #000000 100%),
            linear-gradient(342.99deg, rgba(0, 0, 0, 0) 80.59%, rgba(0, 0, 0, 0.7) 98.15%)`,
            }}
            className="w-full h-full p-[0.486rem]"
          >
            <div className="py-0.5 border-b-[1px] border-b-primary w-fit">
              <p className="text-[0.625rem] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem]">
                INSIGHT
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[0.625rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            {short_description}
          </p>
        </div>
      </div>
    </CarouselItem>
  );
}
