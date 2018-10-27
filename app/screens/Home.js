import React from "react";
import { View, Text, StatusBar } from "react-native";
import { ImageContainer } from "../components/Container";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Dimensions } from "react-native";

const fourthHeight = Dimensions.get("window").height / 1.5;

export default () => (
  <ImageContainer>
    <View>
      <Heading center={true}>You're all set!</Heading>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 20,
          marginLeft: 30,
          marginRight: 30,
          marginTop: fourthHeight,
          position: "absolute"
        }}
      >
        Learning to dance takes time. Why don't we start with a simple challenge
        ?
      </Text>
      <Button text={"Enter text here"} />
    </View>
  </ImageContainer>
);
