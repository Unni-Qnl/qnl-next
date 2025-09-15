import React from "react";

type Props = {
  data: any;
};

export default function CaseStudyContent({ data }: Props) {
  return (
    <div className="isolate container py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
      />
    </div>
  );
}
