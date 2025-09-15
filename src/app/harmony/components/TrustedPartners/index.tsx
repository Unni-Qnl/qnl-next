import shopify from "@/assets/harmony/shopify.svg";
import bigCommerce from "@/assets/harmony/big-commerce.svg";

type Props = {};

export default function TrustedPartners({}: Props) {
  return (
    <div className="bg-white text-[#3A3541]">
      <div className="container grid grid-cols-2 items-center py-10 md:py-[5rem] lg:py-[6.667rem] xl:py-[8.333rem] 2xl:py-[10rem] 3xl:py-[12.5rem]">
        <div>
          <h4 className="font-semibold text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Our Trusted <br /> Partner
          </h4>
        </div>
        <div className="flex items-center gap-11">
          <div className="border-r-2 md:pr-[1.6rem] lg:pr-[2.133rem] xl:pr-[2.667rem] 2xl:pr-[3.2rem] 3xl:pr-[4rem]">
            <img
              src={shopify.src}
              alt="shopify"
              loading="lazy"
              className="w-[3.5rem] md:w-[4.216rem] lg:w-[5.621rem] xl:w-[7.027rem] 2xl:w-[8.432rem] 3xl:w-[10.54rem] h-[1rem] md:h-[1.2rem] lg:h-[1.6rem] xl:h-[2rem] 2xl:h-[2.4rem] 3xl:h-[3rem]"
            />
          </div>
          <img
            src={bigCommerce.src}
            alt="bigCommerce"
            loading="lazy"
            className="h-4 md:h-[1.2rem] lg:h-[1.6rem] xl:h-[2rem] 2xl:h-[2.4rem] 3xl:h-[3rem] w-[4.438rem] md:w-[5.325rem] lg:w-[7.1rem] xl:w-[8.875rem] 2xl:w-[10.65rem] 3xl:w-[13.313rem]"
          />
        </div>
      </div>
    </div>
  );
}
