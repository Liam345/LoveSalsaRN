import React from "react";
import propTypes from "prop-types";
import { View, Image, ImageBackground } from "react-native";
import styles from "./styles";

const ImageContainer = ({ children }) => (
  <ImageBackground
    style={styles.imageContainer}
    resizeMode="cover"
    source={require("./images/bgImage.jpg")}
    blurRadius={3}
  >
    {children}
  </ImageBackground>
);

ImageContainer.propTypes = {
  children: propTypes.element
};

export default ImageContainer;
