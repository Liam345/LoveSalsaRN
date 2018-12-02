import React from "react";
import { View, WebView } from "react-native";
import { Heading } from "../components/Heading";

class Videos extends React.Component {
  render() {
    return (
      <View>
        <Heading>FIND YOUR FAVORITE SALSA SONG</Heading>
        <WebView
          style={{ flex: 1, height: 200, width: 200 }}
          javaScriptEnabled={true}
          source={{
            uri:
              "https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0"
          }}
        />
      </View>
    );
  }
}

export default Videos;
