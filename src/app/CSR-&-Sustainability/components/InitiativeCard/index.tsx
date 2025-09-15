import primaryPoint from "@/assets/csrandsustainability/primary-point.svg";
import { Fragment } from "react";

type DataNode = {
  title?: string; // for root node with title
  text?: string; // for child nodes with text
  children?: DataNode[]; // recursive type
};

type Props = {
  data: DataNode;
};

export default function InitiativeCard({ data }: Props) {
  return (
    <div className="bg-[#191919] p-4 md:p-[0.6rem] lg:p-[0.8rem] xl:p-[1rem] 2xl:p-[1.2rem] 3xl:p-[1.5rem] md:min-h-[13.75rem] lg:min-h-[18.333rem] xl:min-h-[22.917rem] 2xl:min-h-[27.5rem] 3xl:min-h-[34.375rem]">
      <div className="flex items-center gap-1 md:gap-[0.25rem] lg:gap-[0.333rem] xl:gap-[0.417rem] 2xl:gap-[0.5rem] 3xl:gap-[0.625rem]">
        <img
          className="size-2 md:size-[0.4rem] lg:size-[0.533rem] xl:size-[0.667rem] 2xl:size-[0.8rem] 3xl:size-[1rem] object-cover object-center"
          src={primaryPoint}
          alt="primaryPoint"
        />
        <p className="text-[10px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
          {data?.title}
        </p>
      </div>
      <div>
        <ul className="list-disc leading-loose list-outside text-[10px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] pl-5 md:pl-[1rem] lg:pl-[1.333rem] xl:pl-[1.667rem] 2xl:pl-[2rem] 3xl:pl-[2.5rem]">
          {data?.children?.map((item, index) => (
            <Fragment key={index}>
              <li>{item?.text}</li>
              <ul className="list-[style-type:circle] list-outside pl-2 md:pl-[0.4rem] lg:pl-[0.533rem] xl:pl-[0.667rem] 2xl:pl-[0.8rem] 3xl:pl-[1rem]">
                {item?.children?.map((data, index) => (
                  <li key={index}>{data?.text}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
