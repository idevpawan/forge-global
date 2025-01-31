import React from "react";
import { Skeleton } from "./skeleton";

function Shimmers({ type }: { type: "dashboard" }) {
  return type === "dashboard" ? (
    <div className="px-6">
      <div className="flex items-center space-x-4">
        <Skeleton className=" h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className=" h-4 w-[200px]" />
        </div>
      </div>
      <div className="space-y-2 flex items-center justify-between mt-4">
        <Skeleton className=" h-4 w-[150px]" />
        <Skeleton className=" h-4 w-[150px]" />
      </div>
      <div className="space-y-2 flex items-center justify-between mt-4">
        <Skeleton className=" h-4 w-[150px]" />
        <Skeleton className=" h-4 w-[150px]" />
      </div>
      <div className="space-y-2 flex items-center justify-between mt-4">
        <Skeleton className=" h-4 w-[150px]" />
        <Skeleton className=" h-4 w-[150px]" />
      </div>
      <Skeleton className=" h-10 w-full mt-6" />
    </div>
  ) : (
    <div></div>
  );
}

export default Shimmers;
