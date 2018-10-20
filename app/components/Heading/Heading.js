import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const Heading = ({ children, center }) => {
  const headerStyles = [styles.text];
  if (center) {
    headerStyles.push(styles.centerWhite);
  }
  return <Text style={headerStyles}>{children}</Text>;
};

export default Heading;
