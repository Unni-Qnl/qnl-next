import Navbar from "@/core/components/Navbar";
import type { ReactNode } from "react";
import Breadcrumb from "../Breadcrumb";

type Props = {
  children: ReactNode;
};

export default function PolicyBanner({ children }: Props) {
  return (
    <div>
      <Navbar />
      <header className="container py-8 md:py-0">
        <Breadcrumb />
        <h1 className="text-[24px] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem] mr-1 md:mt-[0.25rem] lg:mt-[0.333rem] xl:mt-[0.417rem] 2xl:mt-[0.5rem] 3xl:mt-[0.625rem]">
          {children}
        </h1>
      </header>
    </div>
  );
}
