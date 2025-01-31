import { ReactNode } from "react";

export type TInvestmentCard = {
  name: string;
  price_per_share: string;
  security_type: string;
  last_round_price_per_share: string;
  last_round_date: string;
  last_round_valuation: string;
  logo: string;
  coverImg: string;
};

export type TButton = {
  children: ReactNode;
  className?: string;
};
