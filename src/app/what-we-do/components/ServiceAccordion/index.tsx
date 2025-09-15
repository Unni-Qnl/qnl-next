"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  index: number;
  title: string;
  image: string;
  description: string;
};

export default function ServiceAccordion({
  index,
  description,
  title,
  image,
}: Props) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const shade =
    index % 2 === 0
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), linear-gradient(180deg, rgba(255, 51, 0, 0) 42.52%, #FF3300 100%)`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`;

  return (
    <div>
      <button
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="cursor-pointer w-full flex items-center justify-between text-[1rem]"
      >
        <span>{title}</span>
        <span
          className={`text-[1rem] transition-transform duration-300 ease-in-out ${
            isAccordionOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <ChevronRight className="size-4" />
        </span>
      </button>
      <div
        className={`mt-2 grid overflow-hidden transition-all duration-300 ease-in-out ${isAccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div
          style={{ backgroundImage: `url("${image}")` }}
          className={`w-full transition-all duration-300 ease-in-out ${isAccordionOpen ? "h-[16.25rem]" : "h-0"} bg-cover bg-center bg-no-repeat overflow-hidden`}
        >
          <div
            style={{ backgroundImage: `${shade}` }}
            className="w-full h-full p-4 grid items-end"
          >
            <p className="text-[0.75rem]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
