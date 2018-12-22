import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { lightBlue, textBlack } from "../utils/colors";

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 15px;
  width: 40px;
  height: 40px;
`;

function Navbar({ onPressBack }) {
  return (
    <Wrapper onPress={onPressBack}>
      <Ionicons name="ios-arrow-round-back" size={42} color={textBlack} />
    </Wrapper>
  );
}

function Navigation(navigation) {
  return {
    headerLeft: <Navbar onPressBack={() => navigation.goBack()} />,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: lightBlue
    },
    headerTintColor: textBlack
  };
}

export default Navigation;
