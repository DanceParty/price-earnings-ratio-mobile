import styled from "styled-components/native";
import { View } from "react-native";

const Buttons = styled.View`
  flex: 2;
  align-items: center;
  justify-content: ${props => props.justifyContent};
`;

export default Buttons;
