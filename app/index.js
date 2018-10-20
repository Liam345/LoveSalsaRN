import React, { Component } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";
import Challenges from "./screens/Challenges";
import Videos from "./screens/Videos";

export default class App extends Component {
  render() {
    return <Videos />;
  }
}

//export default () => <Challenges />;

EStyleSheet.build({
  $primaryBlue: "#4F607A",
  $primaryOrange: "#FFAF4D",
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434",
  $white: "#FFFFFF"
});
