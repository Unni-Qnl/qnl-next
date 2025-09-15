import React from "react";
import ContactUsBanner from "./components/ContactUsBanner";
import ContactUsForm from "./components/ContactUsForm";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <section>
      <ContactUsBanner />
      <ContactUsForm />
    </section>
  );
}
