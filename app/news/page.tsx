"use client";

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import { news } from "@/constants/news";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import React from "react";

function News() {
  return (
    <div className="px-2 space-y-6">
      <p className="font-bold text-3xl">News</p>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="grid lg:flex items-center w-full gap-4 min-w-[300px]">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="lucide lucide-search absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-8"
              placeholder="Search by company"
            />
          </div>
          <div className="sm:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded-xl" />
              <label className="text-sm">Only Watchlist companies</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded-xl" />
              <label className="text-sm">Only highlighted news</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded-xl bg-black" />
              <label className="text-sm">
                Include companies without bids or asks
              </label>
            </div>
          </div>
          <Button>Filter</Button>
          <Button className="text-white bg-black">Subscribe</Button>
        </div>
      </div>
      <Table
        data={news}
        body={news.map((row, rowIndex) => (
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: rowIndex / 20,
              duration: 0.5,
            }}
            key={rowIndex}
            className="border-t dark:text-white text-sm"
          >
            {Object.entries(row).map(([key, value], colIndex) => (
              <td key={colIndex} className="px-4 whitespace-pre py-3">
                {key.includes("sentiment") ? (
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      String(value).includes("negative")
                        ? "bg-red-500"
                        : "bg-green-500"
                    )}
                  ></div>
                ) : key.includes("headline") ? (
                  <a
                    href="#"
                    className="text-blue-500 dark:text-orange-500 underline"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </td>
            ))}
          </motion.tr>
        ))}
      />
    </div>
  );
}

export default News;
