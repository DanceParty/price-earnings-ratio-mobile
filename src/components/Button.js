import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { lightOrange } from "../utils/colors";

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 2;
  flex: 0.25;
  justify-content: center;
  elevation: 5px;
  shadow-offset: 5px 5px;
  shadow-color: ${lightOrange};
  shadow-opacity: 100px;
  shadow-radius: 0px;
`;

export default Button;
