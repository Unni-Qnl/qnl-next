"use client";

import { appRoutes } from "@/core/approutes";
import Button from "@/core/components/Button";
import { useRouter } from "next/navigation";

type Props = {};

export default function GetStarted({}: Props) {
  const router = useRouter();

  const handleNavigate = () => router.push(appRoutes.contactus);

  return (
    <div className="container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <h4 className="font-semibold text-[0.875rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
        Get Started
      </h4>
      <p className="text-[0.625rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-1.5 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
        Let’s Streamline Your Business Operations Together.
      </p>
      <Button
        onClick={handleNavigate}
        className="mt-2.5 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]"
      >
        Contact Us
      </Button>
    </div>
  );
}
