import React from "react";
import ContactUsBanner from "./components/ContactUsBanner";
import ContactUsForm from "./components/ContactUsForm";
import { Metadata } from "next";
import { COMMON_API_URL } from "@/constants";

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(`${COMMON_API_URL}seo/web/listing`);
  url.searchParams.set("module", "contact_us");

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    title: "Contact Us",
    description:
      "Contact QNL Software to discuss your project needs or request support. Let’s build something great together.",
    keywords: data?.data?.seo_keywords?.split(),
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
}

export default function ContactUs() {
  return (
    <section>
      <ContactUsBanner />
      <ContactUsForm />
    </section>
  );
}
