import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";
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

const Search = styled.TextInput`
  width: 100%;
  height: 65px;
  background-color: #a8d5ff;
  border-radius: 15;
  padding-left: 15px;
  justify-content: center;
`;

const Content = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${textBlack}
  text-align: center;
  flex-wrap: wrap;
`;

class Ticker extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          headerLayoutPreset: "center",
          marginLeft: 15,
          width: 40,
          height: 40
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-round-back" size={42} color={textBlack} />
      </TouchableOpacity>
    ),
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: lightBlue
    },
    headerTintColor: textBlack
  });

  state = {
    searchText: "",
    company: null,
    eps: 0,
    stockPrice: 0,
    error: null
  };

  onChangeSearch = text => {
    this.setState({
      searchText: text
    });
  };

  onSearch = async () => {
    const ticker = this.state.searchText;
    const companyUrl = `https://api.iextrading.com/1.0/stock/${ticker}/company`;
    const epsUrl = `https://api.iextrading.com/1.0/stock/${ticker}/earnings`;
    const stockPriceUrl = `https://api.iextrading.com/1.0/stock/${ticker}/price`;
    try {
      const companyData = await fetch(companyUrl);
      const company = await companyData.json();
      const epsData = await fetch(epsUrl);
      const eps = await epsData.json();
      const stockPriceData = await fetch(stockPriceUrl);
      const stockPrice = await stockPriceData.json();
      this.setState({ company, eps: eps.earnings[0].actualEPS, stockPrice });
    } catch (e) {
      this.setState({ error: e.message ? e.message : e });
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Search
            onChangeText={this.onChangeSearch}
            value={this.state.searchText}
            placeholder="Search by ticker..."
            selectionColor={textBlack}
            onEndEditing={this.onSearch}
            autoCorrect={false}
          />
        </Header>
        <Body>
          {this.state.company ? (
            <>
              <Title>{this.state.company.companyName}</Title>
              <Content>{this.state.company.description}</Content>
              <Buttons justifyContent="center">
                <Button
                  activeOpacity={1}
                  onPress={() => {
                    this.props.navigation.navigate("Results", {
                      stockPrice: this.state.stockPrice,
                      earningsPerShare: this.state.eps,
                      companyName: this.state.company.companyName
                    });
                  }}
                >
                  <ButtonStart>
                    <Feather name="arrow-right" size={20} color={textBlack} />
                  </ButtonStart>
                  <ButtonMiddle>
                    <ButtonText>Calculate the Price Earnings Ratio!</ButtonText>
                  </ButtonMiddle>
                </Button>
              </Buttons>
            </>
          ) : this.state.error ? (
            <Text>Something went wrong. Please try searching again.</Text>
          ) : null}
        </Body>
      </Container>
    );
  }
}

export default Ticker;
