import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Card = ({ title, type, distance, phone, address }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{title}</Text>
    <Text style={styles.text}>{type}</Text>
    <View style={styles.separator} />
    <Text style={styles.text}>{distance}</Text>
    <Text style={styles.text}>{"FROM HERE"}</Text>
    <Text style={styles.text}>{`Phone: ${phone}`}</Text>
    <Text style={styles.text}>{address}</Text>
  </View>
);

export default Card;
