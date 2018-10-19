import React from "react";
import propTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

/**
 * @param text- Text display on the List item
 * @param wasSelected - Item was Selected previously
 * @param checkMarked - Display a checkMark when props is true
 */
const ListItem = ({ text, wasSelected, checkMarked = false }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {checkMarked && (
        <Image styles={styles.icon} source={require("./images/tick-box.png")} />
      )}
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  text: propTypes.string,
  wasSelected: propTypes.bool,
  checkMarked: propTypes.bool
};

export default ListItem;
