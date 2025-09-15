"use client";

import { appRoutes } from "@/core/approutes";
import { useRouter } from "next/navigation";

type Props = {};

const MENU_DATA = [
  {
    section: "Home",
    route: appRoutes.home,
  },
  {
    section: "About Us",
    route: appRoutes.whoWeAre,
  },
  {
    section: "Services",
    route: appRoutes.whatWeDo,
    items: [
      { label: "E-Commerce Platform Development", route: "" },
      { label: "Mobile Commerce (M-Commerce) Solutions", route: "" },
      { label: "Inventory & Order Management Systems", route: "" },
      { label: "Secure Payment Gateway Integration", route: "" },
      {
        label: "Custom Retail Software Solutions",
        route: "/services/custom-retail-software",
      },
      { label: "Data Analytics & Business Intelligence", route: "" },
      { label: "Supply Chain & Logistics Integration", route: "" },
      {
        label: "Augmented Reality (AR) & Immersive Retail Experiences",
        route: "",
      },
      { label: "Ongoing Support & Maintenance", route: "" },
    ],
  },
  {
    section: "Industries",
    items: [
      { label: "Banking", route: "" },
      { label: "Capital Markets", route: "" },
      { label: "Consumer Packaged Goods & Distribution", route: "" },
      { label: "Communication, Media & Information Services", route: "" },
      { label: "Education", route: "" },
      { label: "Energy, Resources & Utilities", route: "" },
      { label: "Healthcare", route: "" },
      { label: "High Tech", route: "" },
      { label: "Insurance", route: "" },
      { label: "Life Sciences", route: "" },
      { label: "Manufacturing", route: "" },
      { label: "Public Services", route: "" },
      { label: "Retail", route: "" },
      { label: "Travel & Logistics", route: "" },
    ],
  },
  {
    section: "Insights",
    route: appRoutes.insights,
  },
  {
    section: "Careers",
    route: appRoutes.career,
  },
  {
    section: "Contact Us",
    route: appRoutes.contactus,
    items: [{ label: "Office Locations", route: appRoutes.locations }],
  },
  {
    section: "Legal",
    items: [
      { label: "Privacy Policy", route: appRoutes.privacypolicy },
      { label: "Terms & Conditions", route: appRoutes.termsandconditions },
      { label: "Cookies Policy", route: appRoutes.cookiepolicy },
    ],
  },
];

export default function SitemapListing({}: Props) {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    if (!route) return;
    router.push(route);
  };

  return (
    <div className="container isolate py-8 md:py-[2.6rem] lg:py-[3.467rem] xl:py-[4.333rem] 2xl:py-[5.2rem] 3xl:py-[6.5rem]">
      {MENU_DATA.map((data) => (
        <div key={data?.section}>
          <p
            onClick={() => handleNavigate(data?.route ?? "")}
            className="cursor-pointer hover:border-b-[1px] hover:border-b-primary w-fit text-[1rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mb-5 md:mb-[1.3rem] lg:mb-[1.733rem] xl:mb-[2.167rem] 2xl:mb-[2.6rem] 3xl:mb-[3.25rem]"
          >
            {data?.section}
          </p>
          {data?.items && (
            <ul className="cursor-pointer grid gap-2 md:gap-[0.7rem] lg:gap-[0.933rem] xl:gap-[1.167rem] 2xl:gap-[1.4rem] 3xl:gap-[1.75rem] mb-4 md:mb-[1rem] lg:mb-[1.333rem] xl:mb-[1.667rem] 2xl:mb-[2rem] 3xl:mb-[2.5rem]">
              {data?.items?.map((item) => (
                <li
                  onClick={() => handleNavigate(item?.route ?? "")}
                  key={item?.label}
                  className="hover:border-b-[1px] hover:border-b-primary w-fit text-[0.75rem] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]"
                >
                  {item?.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
