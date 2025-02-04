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

export type TQueryParameters = {
  caplightId: {
    type: string;
    idType: string;
    example: string;
  };
  pitchbookId?: {
    type: string;
    idType: string;
    example: string;
  };
};

export type TApiCard = {
  type: string;
  name: string;
  route: string;
  desc: string;
  response: string;
  queryParameters: TQueryParameters;
};
