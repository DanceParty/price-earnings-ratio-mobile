import styled from "styled-components/native";
import { View } from "react-native";
import { lightBlue, textBlack } from "../utils/colors";

const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 55px;
  background-color: ${lightBlue};
  color: ${textBlack};
`;

export default Container;
