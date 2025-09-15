"use client";

import { QUERY_KEY } from "@/constants/app-query-keys";
import usePolicies from "@/hooks/usePolicies";
import PolicyBanner from "@/ui/PolicyBanner";
import React from "react";

type Props = {};

export default function TermsAndConditions({}: Props) {
  const { data } = usePolicies({
    queryKey: QUERY_KEY.termsAndCondition,
    type: "terms_and_conditions",
  });

  return (
    <section>
      <PolicyBanner children="Terms & Conditions" />
      <div className="container my-8 md:my-[2.6rem] lg:my-[3.467rem] xl:my-[4.333rem] 2xl:my-[5.2rem] 3xl:my-[6.5rem]">
        {data && (
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data[0]?.content ?? "" }}
          />
        )}
      </div>
    </section>
  );
}
