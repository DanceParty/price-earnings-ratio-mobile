import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { lightBlue, textBlack, darkOrange } from "../utils/colors";
import Calculator from "../components/Calculator";

class StockPrice extends React.Component {
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
        title="Enter the current stock price..."
        secondaryText="Clear value"
        onPressSecondary={this.resetStockPrice}
        onPressNumber={this.onPressNumber}
        onPressNext={this.onPressNext}
      />
    );
  }
}

export default StockPrice;
