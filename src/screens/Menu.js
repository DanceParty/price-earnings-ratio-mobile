import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import WatermarkCircle from "../components/WatermarkCircle";
import WatermarkTriangle from "../components/WatermarkTriangle";
import { lightBlue, textBlack, lightOrange } from "../utils/colors";
import { text } from "../utils/text";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Title from "../components/Title";
import Buttons from "../components/Buttons";
import Button from "../components/Button";
import ButtonStart from "../components/ButtonStart";
import ButtonMiddle from "../components/ButtonMiddle";
import ButtonText from "../components/ButtonText";

const Description = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
`;

class Menu extends React.Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: lightBlue
    }
  };

  navigateToStockPrice = () => {
    this.props.navigation.navigate("StockPrice");
  };

  navigateToTicker = () => {
    this.props.navigation.navigate("Ticker");
  };

  render() {
    return (
      <Container>
        <WatermarkCircle />
        <WatermarkTriangle />
        <Title fontSize="large" textAlign="left">
          {text.menu.title}
        </Title>
        <Body>
          <Description>{text.menu.body}</Description>
        </Body>
        <Buttons justifyContent="space-around">
          <Button activeOpacity={1} onPress={this.navigateToStockPrice} testID="eps-button">
            <ButtonStart>
              <Feather name="dollar-sign" size={20} color={textBlack} />
            </ButtonStart>
            <ButtonMiddle>
              <ButtonText>{text.buttons.eps}</ButtonText>
            </ButtonMiddle>
          </Button>
          <Button activeOpacity={1} onPress={this.navigateToTicker} testID="ticker-button">
            <ButtonStart>
              <MaterialIcons name="text-format" size={24} color={textBlack} />
            </ButtonStart>
            <ButtonMiddle>
              <ButtonText>{text.buttons.ticker}</ButtonText>
            </ButtonMiddle>
          </Button>
        </Buttons>
      </Container>
    );
  }
}

export default Menu;
