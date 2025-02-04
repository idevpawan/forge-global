"use client";

import ApiCard from "@/components/ui/ApiCard";
import { apisResponse } from "@/constants/api";
import { Search } from "lucide-react";
import React from "react";

function API() {
  const handleScrollToApiCard = (name: string) => {
    const targetElement = document.getElementById(name);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-[1250px]:flex items-start">
      {/* endpoints */}
      <div className="max-w-[255px] max-[1250px]:max-w-full bg-[#E9ECF0] dark:bg-card border-r w-full min-[1250px]:h-screen p-4">
        <div className="relative">
          <Search className="lucide lucide-search absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-8"
            placeholder="Search endpoints..."
          />
        </div>
        <div className="mt-4 space-y-2">
          {apisResponse.map((item) => {
            return (
              <div
                key={item.name}
                onClick={() => handleScrollToApiCard(item.name)}
                className="flex hover:bg-white/60 dark:hover:bg-primary/20 cursor-pointer rounded transition-all ease-in-out duration-100 p-2 items-center gap-4"
              >
                <span className="px-1.5 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary">
                  {item.type}
                </span>
                <p className="text-sm truncate">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* documents */}
      <div className="w-full min-[1250px]:ml-6 min-[1250px]:pr-6 min-[1250px]:h-screen overflow-y-auto">
        <p className="text-2xl font-bold my-4">API Documentation</p>
        <div className="space-y-8">
          {apisResponse.map((item, i) => {
            return (
              <div key={i} id={item.name}>
                <ApiCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* responses */}
      <div className="max-w-[255px] max-[1250px]:mt-6 max-[1250px]:max-w-full font-mono bg-[#E9ECF0] dark:bg-card border-l w-full min-[1250px]:h-screen p-4">
        <p className="pl-2 py-2 text-xs font-semibold text-muted-foreground/70 uppercase">
          code response
        </p>
        <div className="mt-4 space-y-2">
          {apisResponse.map((item) => {
            return (
              <div
                key={item.name}
                className="flex cursor-pointer rounded transition-all ease-in-out duration-100 p-2 items-center gap-4"
              >
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default API;
