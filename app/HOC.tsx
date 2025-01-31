import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React, { ReactNode } from "react";

function HOC({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <div className="max-sm:hidden">
        <Sidebar />
      </div>
      <main className="flex-1 min-w-0">
        {" "}
        <Header />
        <div className="sm:hidden">
          <Sidebar />
        </div>
        <div className="p-2 sm:p-6 mx-auto max-w-[1440px] overflow-auto">
          {children}
        </div>{" "}
      </main>
    </div>
  );
}

export default HOC;
