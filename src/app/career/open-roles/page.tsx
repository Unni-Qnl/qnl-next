import OpenRolesBanner from "./components/OpenRolesBanner";
import RolesListing from "./components/RolesListing";

type Props = {};

export default function OpenRoles({}: Props) {
  return (
    <section>
      <OpenRolesBanner />
      <RolesListing />
    </section>
  );
}
