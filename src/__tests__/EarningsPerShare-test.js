import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import EarningsPerShare from "../screens/EarningsPerShare";

function createProps(props) {
  return {
    navigation: {
      navigate: jest.fn(),
      state: {
        params: {
          stockPrice: "0"
        }
      }
    },
    ...props
  };
}

describe("Earnings Per Share - Calculator", () => {
  test("entering a value and pressing next", () => {
    const props = createProps({});
    const { getByText, getByTestId } = render(<EarningsPerShare {...props} />);
    expect(getByText("Enter the earnings per share...")).toBeTruthy();
    expect(getByText("Clear value")).toBeTruthy();
    expect(getByText("$ 0")).toBeTruthy();

    fireEvent.press(getByTestId("1-button"));
    fireEvent.press(getByTestId("6-button"));
    fireEvent.press(getByTestId(".-button"));
    fireEvent.press(getByTestId("0-button"));
    fireEvent.press(getByTestId("4-button"));
    expect(getByText("$ 16.04")).toBeTruthy();

    fireEvent.press(getByTestId("next-button"));
    expect(props.navigation.navigate).toHaveBeenCalledWith("Results", {
      stockPrice: "0",
      earningsPerShare: "16.04"
    });
  });

  test("entering a value and pressing clear value", () => {
    const props = createProps({});
    const { getByText, getByTestId } = render(<EarningsPerShare {...props} />);
    expect(getByText("Enter the earnings per share...")).toBeTruthy();
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
