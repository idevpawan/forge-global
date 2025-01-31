"use client";

import InvestmentCard from "@/components/ui/InvestmentCard";
import Shimmers from "@/components/ui/Shimmers";
import { investmentOpportunities } from "@/constants/dashboard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="px-2">
      <div className="sm:flex items-center justify-between">
        <div>
          <p className="font-bold text-3xl ">Direct Investment Opportunities</p>
          <p className="text-slate-600 dark:text-gray-400 mt-2">
            If you are interested in investing in companies not listed below,
            please visit Companies or contact your Private Market Specialist.
          </p>
        </div>
        <button className="inline-flex max-sm:mt-4 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-blue-500 dark:text-white dark:border-blue-500 dark:hover:bg-blue-800">
          See all 9
        </button>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => {
              return <Shimmers key={i} type="dashboard" />;
            })
          : investmentOpportunities.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: i / 10,
                    duration: 0.5,
                  }}
                >
                  <InvestmentCard {...item} />
                </motion.div>
              );
            })}
      </div>
    </div>
  );
}
