import styled from "styled-components/native";
import { Text } from "react-native";
import { textBlack } from "../utils/colors";

const Title = styled.Text`
  display: flex;
  font-size: ${props => (props.fontSize === "large" ? "48px" : "36px")};
  font-weight: 500;
  color: ${textBlack};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  flex-wrap: wrap;
`;

export default Title;
