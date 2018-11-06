import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Card = ({ title, date, fromTime, venueName, address, city }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{title}</Text>
    <View style={styles.separator} />
    <Text style={styles.text}>Date: {date}</Text>
    <Text style={styles.text}>Time: {fromTime}</Text>
    <Text style={styles.text}>Venue: {venueName}</Text>
    <Text style={styles.text}>{address}</Text>
    <Text style={styles.text}>{city}</Text>
  </View>
);

export default Card;
