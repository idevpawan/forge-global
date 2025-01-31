"use client";

import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import { companies } from "@/constants/companies";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

function Companies() {
  return (
    <div className="px-2 space-y-6">
      <p className="font-bold text-3xl ">All Companies</p>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex-1 min-w-[300px]">
          <input
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full"
            placeholder="Search companies"
          />
        </div>
        <div className="grid col-end-2 sm:flex flex-wrap gap-4 items-center">
          <Button> Only Watchlist companies</Button>
          <Button>Only MarketPrice Companies</Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Time Period</span>

            <Button>Past 3 months</Button>
          </div>
          <Button>Advanced Filters</Button>
        </div>
      </div>
      <Table
        data={companies}
        body={companies.map((row, rowIndex) => (
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: rowIndex / 20,
              duration: 0.5,
            }}
            key={rowIndex}
            className="border-t dark:text-white hover:bg-orange-500/20 cursor-pointer text-sm"
          >
            {Object.entries(row).map(([key, value], colIndex) => (
              <td key={colIndex} className="px-4 py-3">
                {typeof value === "object" && value !== null ? (
                  <>
                    <div>{value.amount}</div>
                    <div>{value.valuation}</div>
                    <div>{value.date}</div>
                  </>
                ) : key.includes("vs_last_round") ||
                  key.includes("performance") ? (
                  <span
                    className={cn(
                      "font-medium flex gap-1 items-center",
                      String(value).includes("-")
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                  >
                    {String(value).includes("-") ? (
                      <ArrowDownRight className="w-4" />
                    ) : (
                      <ArrowUpRight className="w-4" />
                    )}
                    {value}
                  </span>
                ) : key.includes("company") ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <Image
                      width={24}
                      height={24}
                      src={
                        "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                      }
                      alt="Epic Games"
                      className="w-6 h-6 rounded flex-shrink-0"
                    />
                    <span className="font-medium truncate">{row.company}</span>
                  </div>
                ) : (
                  value
                )}
              </td>
            ))}
          </motion.tr>
        ))}
      />
      <Pagination />
    </div>
  );
}

export default Companies;
