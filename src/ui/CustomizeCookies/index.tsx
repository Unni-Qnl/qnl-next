import React, { useState } from "react";
import Cookies from "js-cookie";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleAccept: () => void;
  handleCloseCookieConsent: () => void;
};

export default function CustomizeCookies({
  handleAccept,
  handleCloseCookieConsent,
  onOpenChange,
  open,
}: Props) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    Cookies.get("analyticsConsent") === "true",
  );

  const handleToggle = (checked: boolean) => {
    console.log("Switch toggled:", checked);
    setAnalyticsEnabled(checked);
  };

  const saveMyPreference = () => {
    Cookies.set("analyticsConsent", String(analyticsEnabled), { expires: 365 });
    onOpenChange(false);
    handleCloseCookieConsent();
  };

  const handleAllowAll = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    Cookies.set("analyticsConsent", "true", { expires: 365 });
    handleAccept();
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80 fixed inset-0 z-[9999998]" />
      <DialogContent className="z-[9999999] p-0 m-0 bg-black border-none max-w-[95%] md:max-w-[44.125rem] lg:max-w-[58.833rem] xl:max-w-[73.542rem] 2xl:max-w-[88.25rem] 3xl:max-w-[110.313rem]">
        <div
          data-lenis-prevent
          className="bg-black p-6 md:p-[1.2rem] lg:p-[1.6rem] xl:p-[2rem] 2xl:p-[2.4rem] 3xl:p-[3rem] overflow-y-auto md:max-h-[17.475rem] lg:max-h-[23.3rem] xl:max-h-[29.125rem] 2xl:max-h-[34.95rem] 3xl:max-h-[43.688rem]"
        >
          <h4 className="text-2xl md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
            Your Privacy
          </h4>
          <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
            When you visit any website, it may store or retrieve information on
            your browser, mostly in the form of cookies. This information might
            be about you, your preferences or your device and is mostly used to
            make the site work as you expect it to. The information does not
            usually directly identify you, but it can give you a more
            personalized web experience. Because we respect your right to
            privacy, you can choose not to allow some types of cookies. Click on
            the different category headings to find out more and change our
            default settings. However, blocking some types of cookies may impact
            your experience of the site and the services we are able to offer.
          </p>
          <button
            onClick={handleAllowAll}
            className="border w-full font-semibold py-2 md:py-[0.4rem] lg:py-[0.533rem] xl:py-[0.667rem] 2xl:py-[0.8rem] 3xl:py-[1rem] text-[12px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] my-6 md:my-[0.8rem] lg:my-[1.067rem] xl:my-[1.333rem] 2xl:my-[1.6rem] 3xl:my-[2rem]"
          >
            Allow all
          </button>
          <div>
            <h4 className="text-2xl md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
              Manage your cookies
            </h4>
            <div className="grid gap-2 md:gap-[1rem] lg:gap-[1.333rem] xl:gap-[1.667rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem] mt-2 md:mt-[1rem] lg:mt-[1.333rem] xl:mt-[1.667rem] 2xl:mt-[2rem] 3xl:mt-[2.5rem]">
              <div className="flex items-center justify-between">
                <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                  Strictly Necessary Cookies
                </p>
                <p className="text-primary text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
                  Always active
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[12px] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                  Performance Cookies
                </p>
                <Switch
                  checked={analyticsEnabled}
                  onCheckedChange={handleToggle}
                />
              </div>
            </div>
          </div>
          <div className="flex md:justify-end mt-4 md:mt-[2.6rem] lg:mt-[3.467rem] xl:mt-[4.333rem] 2xl:mt-[5.2rem] 3xl:mt-[6.5rem]">
            <button
              onClick={saveMyPreference}
              className="w-full md:w-fit font-semibold cursor-pointer border-2 py-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem] text-[12px] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]"
            >
              Save my preferences
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
