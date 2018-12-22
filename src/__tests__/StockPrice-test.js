import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import StockPrice from "../screens/StockPrice";

function createProps(props) {
  return {
    navigation: {
      navigate: jest.fn()
    },
    ...props
  };
}

describe("Stock Price - Calculator", () => {
  test("entering a value and pressing next", () => {
    const props = createProps({});
    const { getByText, getByTestId, debug } = render(<StockPrice {...props} />);
    expect(getByText("Enter the current stock price...")).toBeTruthy();
    expect(getByText("Clear value")).toBeTruthy();
    expect(getByText("$ 0")).toBeTruthy();

    fireEvent.press(getByTestId("1-button"));
    fireEvent.press(getByTestId("6-button"));
    fireEvent.press(getByTestId(".-button"));
    fireEvent.press(getByTestId("0-button"));
    fireEvent.press(getByTestId("4-button"));
    expect(getByText("$ 16.04")).toBeTruthy();

    fireEvent.press(getByTestId("next-button"));
    expect(props.navigation.navigate).toHaveBeenCalledWith("EarningsPerShare", {
      stockPrice: "16.04"
    });
  });

  test("entering a value and pressing clear value", () => {
    const props = createProps({});
    const { getByText, getByTestId, debug } = render(<StockPrice {...props} />);
    expect(getByText("Enter the current stock price...")).toBeTruthy();
    expect(getByText("Clear value")).toBeTruthy();
    expect(getByText("$ 0")).toBeTruthy();

    fireEvent.press(getByTestId("1-button"));
    fireEvent.press(getByTestId("6-button"));
    fireEvent.press(getByTestId(".-button"));
    fireEvent.press(getByTestId("0-button"));
    fireEvent.press(getByTestId("4-button"));
    expect(getByText("$ 16.04")).toBeTruthy();

    fireEvent.press(getByTestId("calculator-secondary-button"));
    expect(getByText("$ 0")).toBeTruthy();
  });
});
