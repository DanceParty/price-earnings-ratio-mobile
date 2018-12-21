import styled from "styled-components/native";
import { Text } from "react-native";
import { textBlack } from "../utils/colors";

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
`;

export default ButtonText;
