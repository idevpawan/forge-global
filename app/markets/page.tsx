"use client";

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import { markets } from "@/constants/markets";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";

function Market() {
  return (
    <div className="px-2 space-y-6">
      <p className="font-bold text-3xl ">Markets</p>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="sm:flex items-center w-full gap-4 min-w-[300px]">
          <input
            className="flex h-10 max-sm:mb-4 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full"
            placeholder="Search companies"
          />
          <div className="flex gap-4">
            <Button className="!bg-[#212a36] dark:!bg-orange-500 text-white border-none hover:text-white">
              All
            </Button>
            <Button>Bid</Button>
            <Button>Offer</Button>
          </div>
        </div>
      </div>
      <Table
        data={markets}
        body={markets.map((row, rowIndex) => (
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
              <td key={colIndex} className="px-4 whitespace-pre py-3">
                {typeof value === "object" && value !== null ? (
                  <>
                    <p className="font-semibold">{value.value}</p>
                    <p>{value.total}</p>
                    <p className=" whitespace-pre">
                      <span
                        className={`${
                          value.market.split(" _ ")[0].includes("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {value.market.split(" _ ")[0]}
                      </span>{" "}
                      <span
                        className={`${
                          value.market.split(" _ ")[1].includes("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {value.market.split(" _ ")[1]}
                      </span>
                    </p>
                  </>
                ) : key.includes("type") ? (
                  <div
                    className={`text-xs text-white text-center rounded-xl inline-flex px-[9px] py-[1px] font-bold ${
                      value === "OFFER"
                        ? "bg-red-500"
                        : "bg-black dark:bg-gray-800"
                    }`}
                  >
                    {value}
                  </div>
                ) : key.includes("source") ? (
                  <div
                    className={`text-xs whitespace-pre dark:text-black bg-blue-400 text-center rounded-xl inline-flex px-[9px] py-[2px] font-semibold `}
                  >
                    {value}
                  </div>
                ) : key.includes("actions") ? (
                  <div className={`flex items-center gap-2 justify-between`}>
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 whitespace-nowrap">
                      <Eye className="lucide lucide-eye h-4 w-4" />
                      View
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 whitespace-nowrap dark:bg-orange-500">
                      <ArrowUpRight className="lucide lucide-arrow-up-right h-4 w-4" />
                      Connect
                    </button>
                  </div>
                ) : key.includes("company") ? (
                  <div className="flex items-center gap-2">
                    <Image
                      src={
                        "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                      }
                      width={24}
                      height={24}
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

export default Market;
