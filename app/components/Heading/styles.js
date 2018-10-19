import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

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
  }
});
