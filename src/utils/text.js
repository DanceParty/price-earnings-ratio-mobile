export const text = {
  menu: {
    title: "Price Earnings Ratio",
    body:
      "We can help you calculate the price-earnings ratio for any given company. Choose the option that best fits your scenario below."
  },
  earningsPerShare: {
    title: "Enter the earnings per share...",
    secondaryText: "Clear value"
  },
  stockPrice: {
    title: "Enter the current stock price...",
    secondaryText: "Clear value"
  },
  results: {
    subtitle: "Price Earnings Ratio",
    body: {
      intro: (company, priceEarningsRatio) =>
        `According to Investopedia, ${company} price-earnings ratio of ${priceEarningsRatio} is considered`,
      rangeLow: "lower",
      rangeHigh: "higher",
      rangeMid: "average",
      end:
        "than the market average. This can mean that the stock is currently overvalued, or investors are expecting higher earnings in the future."
    }
  },
  buttons: {
    eps: "I have the earnings per share",
    ticker: "I have the stock ticker",
    home: "Take me back home!"
  }
};
