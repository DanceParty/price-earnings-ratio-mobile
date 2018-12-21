import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import WatermarkCircle from "../components/WatermarkCircle";
import WatermarkTriangle from "../components/WatermarkTriangle";
import { lightBlue, textBlack, lightOrange, successGreen, dangerRed } from "../utils/colors";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Title from "../components/Title";
import Buttons from "../components/Buttons";
import Button from "../components/Button";
import ButtonStart from "../components/ButtonStart";
import ButtonMiddle from "../components/ButtonMiddle";
import ButtonText from "../components/ButtonText";

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
`;

const HighlightedBodyText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.color}
  flex-wrap: wrap;
`;

const TitleLarge = styled.Text`
  font-size: 96px;
  font-weight: 500;
  color: ${props => props.color};
`;

const BodyText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
  text-align: center;
`;

class Results extends React.Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: lightBlue
    }
  };

  getBodyText = priceEarningsRatio => {
    if (priceEarningsRatio > 25) {
      return (
        <BodyText>
          According to Investopedia, a price-earnings ratio of {priceEarningsRatio} is
          considered <HighlightedBodyText color={successGreen}>higher</HighlightedBodyText>{" "}
          than the market average. This can mean that the stock is currently overvalued, or
          investors are expecting higher earnings in the future.
        </BodyText>
      );
    } else if (priceEarningsRatio < 20) {
      return (
        <BodyText>
          According to Investopedia, a price-earnings ratio of {priceEarningsRatio} is
          considered <HighlightedBodyText color={dangerRed}>lower</HighlightedBodyText> than
          the market average. This can mean that the stock is currently undervalued, or the
          company is doing exceptionally well compared to past trends.
        </BodyText>
      );
    } else {
      return (
        <BodyText>
          According to Investopedia, a price-earnings ratio of {priceEarningsRatio} is
          considered <HighlightedBodyText color={dangerRed}>average</HighlightedBodyText> in
          the current market.
        </BodyText>
      );
    }
  };

  getPriceEarningsRatioText = priceEarningsRatio => {
    if (priceEarningsRatio > 25) {
      return <TitleLarge color={successGreen}>{priceEarningsRatio}</TitleLarge>;
    } else if (priceEarningsRatio < 20) {
      return <TitleLarge color={dangerRed}>{priceEarningsRatio}</TitleLarge>;
    } else {
      return <TitleLarge color={textBlack}>{priceEarningsRatio}</TitleLarge>;
    }
  };

  render() {
    const { stockPrice, earningsPerShare } = this.props.navigation.state.params;
    console.log(stockPrice, earningsPerShare);
    const priceEarningsRatio = (parseFloat(stockPrice) / parseFloat(earningsPerShare)).toFixed(
      2
    );
    return (
      <>
        <Container>
          <WatermarkCircle />
          <WatermarkTriangle />
          <Header>
            <Subtitle>Market Price / EPS = Price-Earnings Ratio</Subtitle>
            <Title>
              {stockPrice} / {earningsPerShare} =
            </Title>
          </Header>
          <Body>
            {this.getPriceEarningsRatioText(priceEarningsRatio)}
            {this.getBodyText(priceEarningsRatio)}
          </Body>
          <Buttons justifyContent="center">
            <Button
              activeOpacity={1}
              onPress={() => {
                this.props.navigation.reset(
                  [NavigationActions.navigate({ routeName: "Menu" })],
                  0
                );
              }}
            >
              <ButtonStart>
                <Feather name="arrow-left" size={20} color={textBlack} />
              </ButtonStart>
              <ButtonMiddle>
                <ButtonText>Take me back home!</ButtonText>
              </ButtonMiddle>
            </Button>
          </Buttons>
        </Container>
      </>
    );
  }
}

export default Results;
