import { TInvestmentCard } from "@/types";
import React from "react";
import Image from "next/image";

function InvestmentCard(props: TInvestmentCard) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${props.coverImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative flex flex-col space-y-1.5 border-b border-slate-200 p-6 text-white"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="relative z-10 flex items-center space-x-4">
          <div className="h-10 w-10 bg-slate-100 rounded-md flex items-center justify-center">
            <Image
              width={24}
              height={24}
              src={props.logo}
              alt={props.name}
              className="h-6 w-6"
            />
          </div>
          <h3 className="tracking-tight text-xl font-semibold">{props.name}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-gray-400">
              Price Per Share
            </span>
            <span className="font-semibold ">{props.price_per_share}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-gray-400">
              Security Type
            </span>
            <span>{props.security_type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-gray-400">
              Last Round Price Per Share
            </span>
            <span>{props.last_round_price_per_share}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-gray-400">
              Last Round Date
            </span>
            <span>{props.last_round_date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-gray-400">
              Last Round Valuation
            </span>
            <span>{props.last_round_valuation}</span>
          </div>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-white dark:bg-black hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200 text-orange-500 border-2 border-orange-500 hover:border-orange-500">
          INDICATE INTEREST
        </button>
      </div>
    </div>
  );
}

export default InvestmentCard;
