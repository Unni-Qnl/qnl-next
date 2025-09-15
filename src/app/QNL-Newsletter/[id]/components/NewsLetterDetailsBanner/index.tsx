"use client";

import Navbar from "@/core/components/Navbar";
import { TNewsLetter } from "@/types/modules.types";
import Breadcrumb from "@/ui/Breadcrumb";
import React from "react";

type Props = {
  data: TNewsLetter;
};

export default function NewsLetterDetailsBanner({ data }: Props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Breadcrumb />
        <h1 className="md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem] md:mt-[0.25rem] lg:mt-[0.333rem] xl:mt-[0.417rem] 2xl:mt-[0.5rem] 3xl:mt-[0.625rem]">
          {data?.title}
        </h1>
        <div className="border-l-2 border-l-primary md:pl-[0.4rem] lg:pl-[0.533rem] xl:pl-[0.667rem] 2xl:pl-[0.8rem] 3xl:pl-[1rem] md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
          <p className="text-[#C5C5C5] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem]">
            {data?.author}
          </p>
        </div>
      </div>
      <div className="container isolate md:py-[2.5rem] lg:py-[3.333rem] xl:py-[4.167rem] 2xl:py-[5rem] 3xl:py-[6.25rem]">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
        />
      </div>
    </div>
  );
}
