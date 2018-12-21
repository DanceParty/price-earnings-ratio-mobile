import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { darkOrange } from "../utils/colors";

const WatermarkCircle = styled.View`
  width: 247px;
  height: 247px;
  border-radius: 123.5px;
  background-color: ${darkOrange};
  position: absolute;
  top: 268px;
  left: 257px;
`;

export default WatermarkCircle;
