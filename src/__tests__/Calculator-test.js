import React from "react";
import { render } from "react-native-testing-library";
import Calculator from "../components/Calculator";

describe("Calculator", () => {
  test("all buttons are present", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("1-button")).toBeTruthy();
    expect(getByTestId("2-button")).toBeTruthy();
    expect(getByTestId("3-button")).toBeTruthy();
    expect(getByTestId("4-button")).toBeTruthy();
    expect(getByTestId("5-button")).toBeTruthy();
    expect(getByTestId("6-button")).toBeTruthy();
    expect(getByTestId("7-button")).toBeTruthy();
    expect(getByTestId("8-button")).toBeTruthy();
    expect(getByTestId("9-button")).toBeTruthy();
    expect(getByTestId(".-button")).toBeTruthy();
    expect(getByTestId("0-button")).toBeTruthy();
    expect(getByTestId("next-button")).toBeTruthy();
  });
});
