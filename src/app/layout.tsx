import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import MetaProvider from "@/contexts/MetaContext";
import { ReactLenis } from "@/utils/lenis";
import AppLayout from "@/layout";
import { Toaster } from "@/components/ui/sonner";

const nunito = Nunito({
  subsets: ["latin"], // or ["latin-ext"] if needed
  variable: "--font-nunito", // optional: creates a CSS variable
  weight: ["400", "600", "700"], // pick the weights you need
});

export const metadata: Metadata = {
  title: {
    default:
      "QNL Software – IT Services | Custom Development | Digital Solutions",
    template: "%s - QNL Software",
  },
  description:
    "QNL Software delivers innovative IT solutions, including Custom Software, AI/ML, and Staff Augmentation for global clients.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover,  interactive-widget=resizes-content"
      />
      <body className={`${nunito.variable} antialiased bg-black relative`}>
        <ReactLenis root>
          <QueryProvider>
            <Toaster position="top-center" />
            <MetaProvider>
              <AppLayout>{children}</AppLayout>
            </MetaProvider>
          </QueryProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
