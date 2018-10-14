import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const ItemWidth = Dimensions.get("window").width / 1.2;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60
  },
  row: {
    backgroundColor: "$primaryOrange",
    width: ItemWidth,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  text: {
    fontSize: 20,
    paddingTop: 40,
    paddingBottom: 40,
    fontWeight: "300",
    paddingLeft: 10,
    flex: 3
  },
  icon: {
    flex: 1,
    alignSelf: "flex-start"
  }
});
