import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import WatermarkCircle from "../components/WatermarkCircle";
import WatermarkTriangle from "../components/WatermarkTriangle";
import { lightBlue, textBlack, lightOrange, successGreen, dangerRed } from "../utils/colors";
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

  getRangeText = priceEarningsRatio => {
    return priceEarningsRatio > 25
      ? text.results.body.rangeHigh
      : priceEarningsRatio < 20
      ? text.results.body.rangeLow
      : text.results.body.rangeMid;
  };

  getColor = priceEarningsRatio => {
    return priceEarningsRatio > 25
      ? successGreen
      : priceEarningsRatio < 20
      ? dangerRed
      : textBlack;
  };

  getBodyText = priceEarningsRatio => {
    const { companyName } = this.props.navigation.state.params;
    const company = companyName ? `${companyName}'s` : "a";
    const middle = this.getRangeText(priceEarningsRatio);
    const middleColor = this.getColor(priceEarningsRatio);
    return (
      <BodyText>
        {text.results.body.intro(company, priceEarningsRatio)}{" "}
        <HighlightedBodyText color={middleColor}>{middle}</HighlightedBodyText>{" "}
        {text.results.body.end}
      </BodyText>
    );
  };

  render() {
    const { stockPrice, earningsPerShare, companyName } = this.props.navigation.state.params;
    const priceEarningsRatio = (parseFloat(stockPrice) / parseFloat(earningsPerShare)).toFixed(
      2
    );
    return (
      <>
        <Container>
          <WatermarkCircle />
          <WatermarkTriangle />
          <Header>
            <Title>{text.results.subtitle}</Title>
          </Header>
          <Body>
            <TitleLarge color={this.getColor(priceEarningsRatio)}>
              {priceEarningsRatio}
            </TitleLarge>
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
                <Feather name="home" size={20} color={textBlack} />
              </ButtonStart>
              <ButtonMiddle>
                <ButtonText>{text.buttons.home}</ButtonText>
              </ButtonMiddle>
            </Button>
          </Buttons>
        </Container>
      </>
    );
  }
}

export default Results;
