"use client";

import { appRoutes } from "@/core/approutes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomizeCookies from "../CustomizeCookies";

type Props = {
  handleAccept: () => void;
  handleReject: () => void;
  handleCloseCookieConsent: () => void;
};

export default function CookieConsent({
  handleAccept,
  handleCloseCookieConsent,
  handleReject,
}: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigateToPolicies = () => {
    router.push(appRoutes.cookiepolicy);
    setOpen(false);
    handleCloseCookieConsent();
  };
  return (
    <>
      <div className="bg-black p-6 md:p-[1.2rem] lg:p-[1.6rem] xl:p-[2rem] 2xl:p-[2.4rem] 3xl:p-[3rem]">
        <h4 className="text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          We use cookies to give you the best possible experience on our website
        </h4>
        <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
          When you visit any website, it may store or retrieve information on
          your browser, mostly in the form of cookies. This information might be
          about you, your preferences or your device and is mostly used to make
          the site work as you expect it to. The information does not usually
          directly identify you, but it can give you a more personalized web
          experience. Because we respect your right to privacy, you can choose
          not to allow some types of cookies. However, blocking some types of
          cookies may impact your experience of the site and the services we are
          able to offer. To find out more, read our updated{" "}
          <span
            onClick={handleNavigateToPolicies}
            className="cursor-pointer underline"
          >
            Cookie policy
          </span>
        </p>
        <div className="flex items-center justify-between mt-6 md:mt-[2.6rem] lg:mt-[3.467rem] xl:mt-[4.333rem] 2xl:mt-[5.2rem] 3xl:mt-[6.5rem]">
          <button
            onClick={handleReject}
            className="font-semibold cursor-pointer border-2 p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem] text-[12px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]"
          >
            Reject all
          </button>
          <div className="flex items-center gap-4 md:gap-[0.9rem] lg:gap-[1.2rem] xl:gap-[1.5rem] 2xl:gap-[1.8rem] 3xl:gap-[2.25rem]">
            <button
              onClick={() => setOpen(true)}
              className="font-semibold cursor-pointer border-2 p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem] text-[12px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]"
            >
              Customize cookies
            </button>
            <button
              onClick={handleAccept}
              className="font-semibold cursor-pointer border-2 border-primary bg-primary p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem] text-[12px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]"
            >
              Accept all cookies
            </button>
          </div>
        </div>
      </div>

      <CustomizeCookies
        handleAccept={handleAccept}
        onOpenChange={setOpen}
        open={open}
        handleCloseCookieConsent={handleCloseCookieConsent}
      />
    </>
  );
}
