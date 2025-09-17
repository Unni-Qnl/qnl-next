import Navbar from "@/core/components/Navbar";
import React from "react";
import WorkerHeader from "./components/WorkerHeader";
import CoreFeatures from "./components/CoreFeatures";

type Props = {};

export default function Worker({}: Props) {
  return (
    <>
      <Navbar logo="worker" />
      <div>
        <WorkerHeader />
        <CoreFeatures />
      </div>
    </>
  );
}
