import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { lightBlue, textBlack, darkOrange } from "../utils/colors";

const Container = styled.View`
  flex: 1;
  background-color: ${lightBlue};
`;

const Header = styled.View`
  flex: 2;
`;

const Title = styled.Text`
  padding: 35px;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
`;

const PrimaryText = styled.Text`
  padding: 35px;
  text-align: right;
  justify-content: center;
  text-align: right;
  font-size: 64px;
  font-weight: 500;
  color: ${textBlack};
  flex-wrap: wrap;
`;

const SecondaryText = styled.Text`
  justify-content: center;
  color: ${textBlack};
  font-weight: 500;
  text-align: center;
`;

const Body = styled.View`
  flex: 3;
  background-color: ${textBlack};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const Button = styled.TouchableOpacity`
  height: 25%;
  width: 33%;
  text-align: center;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  height: 25%;
  width: 33%;
  text-align: center;
  justify-content: center;
  background-color: ${darkOrange};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const ButtonNumber = styled.Text`
  color: white;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`;

function Calculator({
  title,
  value,
  secondaryText,
  onPressNext,
  onPressNumber,
  onPressSecondary
}) {
  const calculation = `$ ${value ? value : 0}`;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <PrimaryText>{calculation}</PrimaryText>
        <SecondaryText onPress={onPressSecondary} testID="calculator-secondary-button">
          {secondaryText}
        </SecondaryText>
      </Header>
      <Body>
        <Button onPress={() => onPressNumber("1")} testID="1-button">
          <ButtonNumber>1</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("2")} testID="2-button">
          <ButtonNumber>2</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("3")} testID="3-button">
          <ButtonNumber>3</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("4")} testID="4-button">
          <ButtonNumber>4</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("5")} testID="5-button">
          <ButtonNumber>5</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("6")} testID="6-button">
          <ButtonNumber>6</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("7")} testID="7-button">
          <ButtonNumber>7</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("8")} testID="8-button">
          <ButtonNumber>8</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("9")} testID="9-button">
          <ButtonNumber>9</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber(".")} testID=".-button">
          <ButtonNumber>.</ButtonNumber>
        </Button>
        <Button onPress={() => onPressNumber("0")} testID="0-button">
          <ButtonNumber>0</ButtonNumber>
        </Button>
        <NextButton onPress={onPressNext} testID="next-button">
          <ButtonNumber>Next</ButtonNumber>
        </NextButton>
      </Body>
    </Container>
  );
}

export default Calculator;
