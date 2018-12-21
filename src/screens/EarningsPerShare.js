import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { lightBlue, textBlack, darkOrange } from "../utils/colors";
import Calculator from "../components/Calculator";

class EarningsPerShare extends React.Component {
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
    earningsPerShare: ""
  };

  onPressNumber = value => {
    if (this.state.earningsPerShare.length < 8) {
      const newEarningsPerShare = this.state.earningsPerShare.concat(value);
      this.setState({ earningsPerShare: newEarningsPerShare });
    }
  };

  resetEarningsPerShare = () => {
    this.setState({
      earningsPerShare: ""
    });
  };

  onPressNext = () => {
    this.props.navigation.navigate("Results", {
      stockPrice: this.props.navigation.state.params.stockPrice,
      earningsPerShare: this.state.earningsPerShare
    });
  };

  render() {
    return (
      <Calculator
        value={this.state.earningsPerShare}
        title="Enter the earnings per share..."
        secondaryText="Clear value"
        onPressSecondary={this.resetEarningsPerShare}
        onPressNumber={this.onPressNumber}
        onPressNext={this.onPressNext}
      />
    );
  }
}

export default EarningsPerShare;
