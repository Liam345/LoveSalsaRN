import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  WebView,
  Image
} from "react-native";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const fourthScreenHeight = Dimensions.get("window").height / 4;

class DisplayLocation extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Heading>Let's Dance At</Heading>
        <View>
          <Image
            style={{ height: 400, width: screenWidth, position: "absolute" }}
            source={require("../assets/tsf.png")}
          />
        </View>
        <ScrollView style={{ marginTop: fourthScreenHeight }}>
          <Card
            title="The Salsa Foundation"
            type="SALSA"
            distance="770 METERS"
            phone="+61431484840"
            address="132 Wellington PDE East Melbourne Victoria"
          />
        </ScrollView>
      </View>
    );
  }
}

export default DisplayLocation;
