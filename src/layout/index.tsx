"use client";

import CookieConsent from "@/ui/CookieConsent";
import Footer from "@/ui/Footer";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      Cookies.set("cookieConsent", "true", { expires: 365 });
      Cookies.set("analyticsConsent", "true", { expires: 365 });
      setIsOpen(false);
    } catch (error) {
      console.error("Cookie accept error:", error);
    }
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    Cookies.set("analyticsConsent", "false", { expires: 365 });
    setIsOpen(false);
  };

  const handleCloseCookieConsent = () => setIsOpen(false);

  return (
    <div className="relative">
      {children}
      {/* <div className="fixed z-50 bg-white inset-0 flex items-end">
        <CookieConsent
          handleAccept={handleAccept}
          handleReject={handleReject}
          handleCloseCookieConsent={handleCloseCookieConsent}
        />
      </div> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed z-[99] inset-0 flex items-end"
          >
            <CookieConsent
              handleAccept={handleAccept}
              handleReject={handleReject}
              handleCloseCookieConsent={handleCloseCookieConsent}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
