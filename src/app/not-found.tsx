"use client";

import bgimage from "@/assets/app/page-not-found.webp";
import Button from "@/core/components/Button";
import { useRouter } from "next/navigation";

type Props = {};

export default function NotFound({}: Props) {
  const router = useRouter();
  return (
    <div
      style={{ backgroundImage: `url(${bgimage.src})` }}
      className="w-full h-screen bg-cover bg-center grid place-items-center md:px-[5.5rem] lg:px-[7.333rem] xl:px-[9.167rem] 2xl:px-[11rem] 3xl:px-[13.75rem]"
    >
      <div className="grid md:grid-cols-2 px-[3.938rem] md:px-0">
        <div className="order-2 md:order-1">
          <h1 className="leading-tight font-extralight text-[2.5rem] md:text-[3.25rem] lg:text-[4.333rem] xl:text-[5.417rem] 2xl:text-[6.5rem] 3xl:text-[8.125rem]">
            Page Not <br className="hidden md:block" /> Found
          </h1>
          <p className="text-[#8C8C8C] text-[0.875rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem]">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
          <div className="mt-4 md:mt-[0.925rem] lg:mt-[1.233rem] xl:mt-[1.542rem] 2xl:mt-[1.85rem] 3xl:mt-[2.313rem] flex items-center gap-4 md:gap-[0.8rem] lg:gap-[1.067rem] xl:gap-[1.333rem] 2xl:gap-[1.6rem] 3xl:gap-[2rem]">
            <Button onClick={() => router.push("/")}>Go to Homepage</Button>
          </div>
        </div>
        <div className="grid items-center md:justify-end order-1 md:order-2">
          <h2 className="text-[9.125rem] md:text-[7.206rem] lg:text-[9.608rem] xl:text-[12.01rem] 2xl:text-[14.412rem] 3xl:text-[18.015rem]">
            404
          </h2>
        </div>
      </div>
    </div>
  );
}
