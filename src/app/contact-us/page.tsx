import React from "react";
import ContactUsBanner from "./components/ContactUsBanner";
import ContactUsForm from "./components/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact QNL Software to discuss your project needs or request support. Let’s build something great together.",
  openGraph: {
    title: "Contact Us",
    description:
      "Contact QNL Software to discuss your project needs or request support. Let’s build something great together.",
    images: [
      {
        url: "https://qnlpublic.s3.ap-south-1.amazonaws.com/White++in+Black+(1200x630).png",
      },
    ],
    url: "https://qnlsoftware.com/contact-us",
    type: "website",
  },
  twitter: {
    title: "Contact Us",
    description:
      "Contact QNL Software to discuss your project needs or request support. Let’s build something great together.",
    images: [
      {
        url: "https://qnlpublic.s3.ap-south-1.amazonaws.com/White++in+Black+(1200x630).png",
      },
    ],
  },
};

export default function ContactUs() {
  return (
    <section>
      <ContactUsBanner />
      <ContactUsForm />
    </section>
  );
}
