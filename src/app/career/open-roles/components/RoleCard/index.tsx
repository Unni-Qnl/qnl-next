"use client";

import { useRouter } from "next/navigation";
import type { TJob } from "../RolesListing";
import { appRoutes } from "@/core/approutes";

type Props = {
  role: TJob;
};

export default function RoleCard({ role }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`${appRoutes.openroles}/${role?.slug}`)}
      className="cursor-pointer w-full border-[1px] border-[#C7C7C7] p-1 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]"
    >
      <p className="text-primary text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
        {role?.department}
      </p>
      <p className="font-light text-[14px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] mt-4 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
        {role?.title}
      </p>
      <div className="grid font-semibold gap-1 md:gap-[0.2rem] lg:gap-[0.267rem] xl:gap-[0.333rem] 2xl:gap-[0.4rem] 3xl:gap-[0.5rem] text-[#767676] text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem] mt-2 md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
        <p className="capitalize">{role?.employment_type}</p>
        <p className="capitalize">
          {role?.job_site} - {role?.job_location}
        </p>
      </div>
    </div>
  );
}
