import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Menu from "./src/screens/Menu";
import StockPrice from "./src/screens/StockPrice";
import EarningsPerShare from "./src/screens/EarningsPerShare";
import Results from "./src/screens/Results";
import Ticker from "./src/screens/Ticker";

const AppNavigator = createStackNavigator({
  Menu: { screen: Menu },
  StockPrice: { screen: StockPrice },
  EarningsPerShare: { screen: EarningsPerShare },
  Results: { screen: Results },
  Ticker: { screen: Ticker }
});

export default createAppContainer(AppNavigator);
