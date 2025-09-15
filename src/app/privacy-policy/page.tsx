import React from "react";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";
import PolicyBanner from "@/ui/PolicyBanner";

type Props = {};

export default function PrivacyPolicy({}: Props) {
  return (
    <section>
      <PolicyBanner children="Privacy Policy" />
      <PrivacyPolicyContent />
    </section>
  );
}
