import React from "react";
import ApplyNowBanner from "./components/ApplyNowBanner";
import ApplyNowForm from "./components/ApplyNowForm";

type Props = {};

export default function ApplyNow({}: Props) {
  return (
    <>
      <ApplyNowBanner />
      <ApplyNowForm />
    </>
  );
}
