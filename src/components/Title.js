import styled from "styled-components/native";
import { Text } from "react-native";
import { textBlack } from "../utils/colors";

const Title = styled.Text`
  font-size: 36px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
  text-align: center;
`;

export default Title;
