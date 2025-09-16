"use client";

import Navbar from "@/core/components/Navbar";
import Breadcrumb from "@/ui/Breadcrumb";
import React from "react";

type Props = {};

export default function PlatformsHeader({}: Props) {
  return (
    <>
      <Navbar />
      <div className="container py-8 md:py-0">
        <Breadcrumb />
        <h1 className="mt-1 md:mt-0 text-2xl md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem]">
          Platforms
        </h1>
      </div>
    </>
  );
}
