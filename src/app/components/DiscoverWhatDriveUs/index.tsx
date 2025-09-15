import React from "react";
import AutoPlayVideo from "../AutoPlayVideo";

export default function DiscoverWhatDriveUs() {
  return (
    <div className="isolate mx-4 md:mx-[2.5rem] lg:mx-[3.333rem] xl:mx-[4.167rem] 2xl:mx-[5rem] 3xl:mx-[6.25rem] my-8 md:my-[2.6rem] lg:my-[3.467rem] xl:my-[4.333rem] 2xl:my-[5.2rem] 3xl:my-[6.5rem] px-4 md:px-[2.5rem] lg:px-[3.333rem] xl:px-[4.167rem] 2xl:px-[5rem] 3xl:px-[6.25rem]">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.5rem] 3xl:text-[5.625rem]">
            Discover What Drives Us
          </h2>
        </div>
        <div className="grid items-center">
          <p className="text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
            Watch our story unfold — from vision to impact. This short video
            captures the heart of who we are, what we do, and how we empower
            businesses with innovative technology and dedicated solutions
          </p>
        </div>
      </div>
      <AutoPlayVideo />
    </div>
  );
}
