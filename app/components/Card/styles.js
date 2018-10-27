import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

export default EStyleSheet.create({
  container: {
    backgroundColor: "$white",
    padding: 20
  },
  header: {
    color: "$primaryOrange",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center"
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center"
  },
  separator: {
    height: 1,
    backgroundColor: "$primaryOrange",
    marginTop: 20,
    marginBottom: 20
  }
});
