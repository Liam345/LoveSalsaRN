import React from "react";
import propTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ListItem = ({ text, wasSelected, checkMarked = true }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <Image styles={styles.icon} source={require("./images/tick-box.png")} />
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  text: propTypes.string,
  wasSelected: propTypes.bool,
  checkMarked: propTypes.bool
};

export default ListItem;
