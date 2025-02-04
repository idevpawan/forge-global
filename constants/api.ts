export const apisResponse = [
  {
    type: "GET",
    name: "Get MarketPrice history",
    route: "/market-price-history",
    desc: "",
    response: `
    {
  "companyMeta": {
    "name": "Stripe",
    "domain": "stripe.com",
    "caplightId": "12d314bkjf90"
  },
  "marketPriceHistory": [ { } ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n9df6519k1",
      },
      pitchbookId: {
        type: "string",
        idType: "Company Pitchbook Id",
        example: "pitchbookId=54782-29",
      },
    },
  },
  {
    type: "GET",
    name: "Get MarketPrice end-of-day history",
    route: "/market-price/end-of-day",
    desc: "",
    response: `
    {
  "history": [
    {
      "date": "2024-02-14",
      "price": 120.50
    }
  ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get all MarketPrices",
    route: "/market-prices",
    desc: "",
    response: `
    {
  "marketPrices": [
    {
      "timestamp": "2024-02-14T12:00:00Z",
      "price": 120.50
    }
  ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get Live Orderbook",
    route: "/orderbook",
    desc: "",
    response: `
    {
  "bids": [ ],
  "asks": [ ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get Trade History",
    route: "/trades",
    desc: "",
    response: `
    {
  "trades": [
    {
      "timestamp": "2024-02-14T12:00:00Z",
      "price": 120.50,
      "quantity": 100
    }
  ]
}
    `,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get Order History",
    route: "/orders",
    desc: "",
    response: `
    {
  "orders": [
    {
      "timestamp": "2024-02-14T12:00:00Z",
      "type": "BUY",
      "price": 120.50,
      "quantity": 100,
      "status": "FILLED"
    }
  ]
}
  `,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get Company Filings",
    route: "/company-filings",
    desc: "",
    response: `
    {
  "filings": [
    {
      "date": "2024-02-14",
      "type": "10-K",
      "url": "https://example.com/filing.pdf"
    }
  ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
  {
    type: "GET",
    name: "Get Stock Splits",
    route: "/stock-splits",
    desc: "",
    response: `
    {
  "splits": [
    {
      "date": "2024-02-14",
      "ratio": "2:1"
    }
  ]
}`,
    queryParameters: {
      caplightId: {
        type: "string",
        idType: "Company Caplight Id",
        example: "caplightId=13591n",
      },
    },
  },
];
