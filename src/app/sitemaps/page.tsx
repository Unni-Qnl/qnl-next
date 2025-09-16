"use client";

import SitemapBanner from "./components/SitemapBanner";
import SitemapListing from "./components/SitemapListing";

type Props = {};

export default function Sitemap({}: Props) {
  return (
    <>
      <SitemapBanner />
      <SitemapListing />
    </>
  );
}
