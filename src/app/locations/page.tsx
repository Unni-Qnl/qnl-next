import LocationBanner from "./components/LocationBanner";
import LocationsListing from "./components/LocationsListing";

type Props = {};

export default function Locations({}: Props) {
  return (
    <section>
      <LocationBanner />
      <LocationsListing />
    </section>
  );
}
