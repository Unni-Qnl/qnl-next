import { Metadata } from "next";
import JoinUsBanner from "./components/JoinUsBanner";
import JoinUsForm from "./components/JoinUsForm";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Find your next opportunity in engineering, product management, or DevOps. Work remotely or at our India headquarters",
};

export default function JoinUs() {
  return (
    <section>
      <JoinUsBanner />
      <JoinUsForm />
    </section>
  );
}
