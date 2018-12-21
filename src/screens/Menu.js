import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import WatermarkCircle from "../components/WatermarkCircle";
import WatermarkTriangle from "../components/WatermarkTriangle";
import { lightBlue, textBlack, lightOrange } from "../utils/colors";

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
        <Header>
          <Title>Price Earnings Ratio</Title>
        </Header>
        <Body>
          <Description>
            We can help you calculate the price-earnings ratio for any given company. Choose
            the option that best fits your scenario below.
          </Description>
        </Body>
        <Buttons justifyContent="space-between">
          <Button activeOpacity={1} onPress={this.navigateToStockPrice}>
            <ButtonStart>
              <Feather name="dollar-sign" size={20} color={textBlack} />
            </ButtonStart>
            <ButtonMiddle>
              <ButtonText>I have the Earnings Per Share</ButtonText>
            </ButtonMiddle>
          </Button>
          <Button activeOpacity={1} onPress={this.navigateToTicker}>
            <ButtonStart>
              <MaterialIcons name="text-format" size={24} color={textBlack} />
            </ButtonStart>
            <ButtonMiddle>
              <ButtonText>I have the ticker</ButtonText>
            </ButtonMiddle>
          </Button>
          <Button activeOpacity={1}>
            <ButtonStart>
              <Feather name="x-circle" size={20} color={textBlack} />
            </ButtonStart>
            <ButtonMiddle>
              <ButtonText>I don't have anything</ButtonText>
            </ButtonMiddle>
          </Button>
        </Buttons>
      </Container>
    );
  }
}

export default Menu;
