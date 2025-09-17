"use client";

import Navbar from "@/core/components/Navbar";
import React from "react";
import WorkerHeader from "./components/WorkerHeader";
import CoreFeatures from "./components/CoreFeatures";
import EmployeeExperience from "./components/EmployeeExperience";
import PerfectForStartups from "./components/PerfectForStartups";

type Props = {};

export default function Worker({}: Props) {
  return (
    <>
      <Navbar logo="worker" />
      <WorkerHeader />
      <CoreFeatures />
      <EmployeeExperience />
      <PerfectForStartups />
    </>
  );
}
