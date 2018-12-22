import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { lightBlue, textBlack, darkOrange } from "../utils/colors";
import { text } from "../utils/text";

import Navigation from "../components/Navigation";
import Calculator from "../components/Calculator";

class EarningsPerShare extends React.Component {
  static navigationOptions = ({ navigation }) => Navigation(navigation);

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
        title={text.earningsPerShare.title}
        secondaryText={text.earningsPerShare.secondaryText}
        onPressSecondary={this.resetEarningsPerShare}
        onPressNumber={this.onPressNumber}
        onPressNext={this.onPressNext}
      />
    );
  }
}

export default EarningsPerShare;
