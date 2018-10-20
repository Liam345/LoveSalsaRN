import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";

const fourthHeight = Dimensions.get("window").height / 4;

export default EStyleSheet.create({
  text: {
    fontSize: 30,
    color: "$darkText",
    alignSelf: "center",
    "@media ios": {
      paddingTop: 40
    },
    "@media android": {
      paddingTop: StatusBar.currentHeight
    }
  },
  centerWhite: {
    color: "$white",
    paddingTop: fourthHeight
  }
});
