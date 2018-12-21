import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { darkOrange } from "../utils/colors";

const WatermarkTriangle = styled.View`
  width: 0px;
  height: 0px;
  background-color: transparent;
  border-style: solid;
  border-top-width: 0px;
  border-right-width: 100px;
  border-bottom-width: 250px;
  border-left-width: 100px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${darkOrange};
  border-left-color: transparent;
  position: absolute;
  top: 540px;
  left: -66px;
`;

export default WatermarkTriangle;
