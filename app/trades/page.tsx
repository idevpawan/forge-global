"use client";

import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { trades } from "@/constants/trades";
import { motion } from "framer-motion";

function Trades() {
  return (
    <div className="px-2 space-y-6">
      <p className="font-bold text-3xl">Trades</p>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center w-full gap-4 min-w-[300px]">
          <input
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full"
            placeholder="Search trades..."
          />
          <Button>Filters</Button>
          <Button>Sort</Button>
        </div>
      </div>
      <Table
        data={trades}
        body={trades.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-t hover:bg-orange-500/20 cursor-pointer text-sm"
          >
            {Object.entries(row).map(([key, value], colIndex) => (
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: colIndex / 20,
                  duration: 0.5,
                }}
                key={colIndex}
                className="px-4 dark:text-white whitespace-pre py-2"
              >
                {key.includes("price_Vs_Last_Round") ||
                key.includes("price_Vs_Market_Price") ? (
                  <span
                    className={cn(
                      "font-medium flex gap-1 items-center",
                      String(value).includes("-")
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                  >
                    {value}
                  </span>
                ) : key.includes("type") ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                    CLOSED TRADE
                  </span>
                ) : key.includes("company") ? (
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                      }
                      alt="Epic Games"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded flex-shrink-0"
                    />
                    <span className="font-medium truncate">{row.company}</span>
                  </div>
                ) : (
                  value
                )}
              </motion.td>
            ))}
          </tr>
        ))}
      />
      <Pagination />
    </div>
  );
}

export default Trades;
