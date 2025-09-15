"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appRoutes } from "@/core/approutes";
import Link from "next/link";

type Props = {};

const NAV_LINKS = [
  {
    id: 1,
    label: "What we do",
    route: appRoutes.whatWeDo,
  },
  {
    id: 2,
    label: "Who we are",
    route: appRoutes?.whoWeAre,
  },
  {
    id: 3,
    label: "Career",
    route: appRoutes?.career,
  },
  {
    id: 4,
    label: "Insight",
    route: appRoutes?.insights,
  },
  {
    id: 5,
    label: "Platforms",
    route: appRoutes?.platforms,
  },
];

export default function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative flex z-100 items-center justify-between bg-black/10 backdrop-blur-[4px] px-4 md:px-[2.5rem] lg:px-[3.333rem] xl:px-[4.1666rem] 2xl:px-[5rem] 3xl:px-[6.25rem] pt-[2.188rem] md:pt-[2.5rem] lg:pt-[3.333rem] xl:pt-[4.1666rem] 2xl:pt-[5rem] 3xl:pt-[6.25rem] pb-[1.188rem] md:pb-[0.875rem] lg:pb-[1.166rem] xl:pb-[1.458rem] 2xl:pb-[1.75rem] 3xl:pb-[2.187rem]">
        <div className="w-[4.094rem] md:w-[2.183rem] lg:w-[2.911rem] xl:w-[3.638rem] 2xl:w-[4.366rem] 3xl:w-[5.458rem] h-[1.125rem] md:h-[0.6rem] lg:h-[0.8rem] xl:h-[1rem] 2xl:h-[1.2rem] 3xl:h-[1.5rem]">
          <Link id="home-route" href={appRoutes.home}>
            <img loading="lazy" title="qnl" src="/app-logo.svg" alt="qnl" />
          </Link>
        </div>
        <div>
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden cursor-pointer"
          >
            <Menu size={"24"} color="white" />
          </button>
          <div className="hidden lg:block">
            <ul
              id="nav-links"
              className="flex items-center md:gap-[0.65rem] lg:gap-[0.8666rem] xl:gap-[1.083rem] 2xl:gap-[1.3rem] 3xl:gap-[1.625rem]"
            >
              {NAV_LINKS.map((link) => (
                <li
                  key={link?.id}
                  className="md:text-[0.5rem] lg:text-[0.666rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem] text-white font-light"
                >
                  <Link href={link?.route}>{link?.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Menu with smooth animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "390px" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full absolute left-0 top-[85px] bg-white z-10 overflow-hidden"
            >
              <ul id="mobile-nav-links" className="text-black mx-6">
                {NAV_LINKS?.map((item) => (
                  <li
                    key={item?.id}
                    className="cursor-pointer border-b-2 border-b-primary py-6 text-[1.25rem]"
                  >
                    <Link href={item?.route}>{item?.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
