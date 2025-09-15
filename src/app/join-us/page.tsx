import JoinUsBanner from "./components/JoinUsBanner";
import JoinUsForm from "./components/JoinUsForm";

type Props = {};

export default function JoinUs({}: Props) {
  return (
    <section>
      <JoinUsBanner />
      <JoinUsForm />
    </section>
  );
}
