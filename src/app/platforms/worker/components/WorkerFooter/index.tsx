"use client";

import Button from "@/core/components/Button";

export default function WorkerFooter() {
  return (
    <>
      <div className="md:pt-[2rem] lg:pt-[2.667rem] xl:pt-[3.333rem] 2xl:pt-[4rem] 3xl:pt-[5rem] md:pb-[2rem] lg:pb-[2.667rem] xl:pb-[3.333rem] 2xl:pb-[4rem] 3xl:pb-[5rem]">
        <div className="bg-white md:py-[1.4rem] lg:py-[1.867rem] xl:py-[2.333rem] 2xl:py-[2.8rem] 3xl:py-[3.5rem]">
          <h3 className="text-[#3A3541] text-center md:text-[1.8rem] lg:text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
            Your Team, Your Growth. We Handle HR.
          </h3>
          <p className="text-[#3A3541] text-center md:text-[0.8rem] lg:text-[1.067rem] xl:text-[1.333rem] 2xl:text-[1.6rem] 3xl:text-[2rem]">
            Start using Worker today and experience effortless HR management. 
          </p>
          <div className="flex items-center justify-center md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem]">
            <Button>Sign Up Free</Button>
          </div>
        </div>
        <div className="flex items-center md:px-[4.725rem] lg:px-[6.3rem] xl:px-[7.875rem] 2xl:px-[9.45rem] 3xl:px-[11.813rem] md:mt-[3.625rem] lg:mt-[4.833rem] xl:mt-[6.042rem] 2xl:mt-[7.25rem] 3xl:mt-[9.063rem]">
          <div>
            <p className="md:text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem] 2xl:text-[2.4rem] 3xl:text-[3rem]">
              Experience Worker Before You Sign Up
            </p>
          </div>
          <div className="flex flex-col">
            <p className="md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
              Don’t just take our word for it — explore{" "}
              <span className="text-primary cursor-pointer">Worker’s</span>{" "}
              features with an interactive walkthrough. See how easy it is to
              manage jobs, leave, payroll, and more.
            </p>
            <p className="text-primary font-bold md:mt-[0.6rem] lg:mt-[0.8rem] xl:mt-[1rem] 2xl:mt-[1.2rem] 3xl:mt-[1.5rem] cursor-pointer">
              Take a Walkthrough
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
