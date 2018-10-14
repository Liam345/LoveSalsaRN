import React, { Component } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";
import Challenges from "./screens/Challenges";

// export default class App extends Component {
//   render() {
//     return <Home />;
//   }
// }

export default () => <Challenges />;

EStyleSheet.build({
  $primaryBlue: "#4F607A",
  $primaryOrange: "#FFAF4D"
});
