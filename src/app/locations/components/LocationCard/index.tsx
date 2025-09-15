import type { TLocation } from "../LocationsListing";

type Data = {
  state: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
};
type Props = {
  data: TLocation;
};

export default function LocationCard({ data }: Props) {
  return (
    <div className="px-[0.563rem] md:px-[0.6rem] lg:px-[0.8rem] xl:px-[1rem] 2xl:px-[1.2rem] 3xl:px-[1.5rem] md:py-[0.4rem] lg:py-[0.533rem] xl:py-[0.667rem] 2xl:py-[0.8rem] 3xl:py-[1rem] border-l-[1px] border-l-primary">
      <div className="flex items-center gap-2 md:gap-[0.5rem] lg:gap-[0.667rem] xl:gap-[0.833rem] 2xl:gap-[1rem] 3xl:gap-[1.25rem] text-[0.875rem] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem]">
        <p>{data?.state?.name}</p>
        <p>|</p>
        <p>{data?.country?.name}</p>
      </div>
      <div className="mt-2 md:mt-[0.475rem] lg:mt-[0.633rem] xl:mt-[0.792rem] 2xl:mt-[0.95rem] 3xl:mt-[1.188rem]">
        <p className="font-semibold text-[#888888] text-[0.625rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] md:mt-[0.45rem] lg:mt-[0.6rem] xl:mt-[0.75rem] 2xl:mt-[0.9rem] 3xl:mt-[1.125rem]">
          Address
        </p>
        <div className="mt-2 md:mt-[0.5rem] lg:mt-[0.667rem] xl:mt-[0.833rem] 2xl:mt-[1rem] 3xl:mt-[1.25rem] text-[0.75rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
          <p>
            {(() => {
              if (!data?.address) return null;

              const parts = data.address.split(",");
              if (parts.length <= 2) return data.address; // if less than 2 commas, just return normally

              return (
                <>
                  {parts.slice(0, 2).join(",")}, <br />
                  {parts.slice(2).join(",")}
                </>
              );
            })()}
          </p>
        </div>
      </div>
    </div>
  );
}
