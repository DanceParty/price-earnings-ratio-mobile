import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { NavigationActions } from "react-navigation";

import Results from "../screens/Results";

const companyName = "Apple";
const stockPrice = "45.02";
const earningsPerShare = "1.11";

function createProps(props) {
  return {
    navigation: {
      reset: jest.fn(),
      state: {
        params: {
          companyName,
          stockPrice,
          earningsPerShare
        }
      }
    },
    ...props
  };
}

describe("Results", () => {
  test("content is present", () => {
    const props = createProps({});
    const { getByText } = render(<Results {...props} />);

    const per = String((parseFloat(stockPrice) / parseFloat(earningsPerShare)).toFixed(2));
    const introText = /According to Investopedia, Apple's price-earnings ratio of 40.56 is considered/;
    const endText = /than the market average. This can mean that the stock is currently overvalued, or investors are expecting higher earnings in the future./;

    expect(getByText("Price Earnings Ratio")).toBeTruthy();
    expect(getByText(per)).toBeTruthy();
    expect(getByText(introText)).toBeTruthy();
    expect(getByText(/higher/)).toBeTruthy();
    expect(getByText(endText)).toBeTruthy();
    expect(getByText("Take me back home!")).toBeTruthy();
  });

  test("clicking the go home button calls navigation prop", () => {
    const props = createProps({});
    const { getByText, debug } = render(<Results {...props} />);
    fireEvent.press(getByText("Take me back home!"));
    expect(props.navigation.reset).toHaveBeenCalledWith(
      [NavigationActions.navigate({ routeName: "Menu" })],
      0
    );
  });
});
