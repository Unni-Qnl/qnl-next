import QnlBpmBanner from "./components/QnlBpmBanner";
import ServiceWeOffer from "./components/ServiceWeOffer";
import IndustriesWeServe from "./components/IndustriesWeServe";
import WhyChooseQnlBpm from "./components/WhyChooseQnlBpm";
import GetStarted from "./components/GetStarted";

type Props = {};

export default function QnlBpm({}: Props) {
  return (
    <section>
      <QnlBpmBanner />
      <ServiceWeOffer />
      <IndustriesWeServe />
      <WhyChooseQnlBpm />
      <GetStarted />
    </section>
  );
}
