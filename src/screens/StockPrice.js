import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { lightBlue, textBlack, darkOrange } from "../utils/colors";
import { text } from "../utils/text";

import Navigation from "../components/Navigation";
import Calculator from "../components/Calculator";

class StockPrice extends React.Component {
  static navigationOptions = ({ navigation }) => Navigation(navigation);

  state = {
    stockPrice: ""
  };

  onPressNumber = value => {
    if (this.state.stockPrice.length < 8) {
      const newStockPrice = this.state.stockPrice.concat(value);
      this.setState({ stockPrice: newStockPrice });
    }
  };

  resetStockPrice = () => {
    this.setState({
      stockPrice: ""
    });
  };

  onPressNext = () => {
    this.props.navigation.navigate("EarningsPerShare", {
      stockPrice: this.state.stockPrice
    });
  };

  render() {
    return (
      <Calculator
        value={this.state.stockPrice}
        title={text.stockPrice.title}
        secondaryText={text.stockPrice.secondaryText}
        onPressSecondary={this.resetStockPrice}
        onPressNumber={this.onPressNumber}
        onPressNext={this.onPressNext}
      />
    );
  }
}

export default StockPrice;
