import React from "react";
import { View, StyleSheet, Image, ViewStyle } from "react-native";

interface Props {
  topContent?: JSX.Element;
  bottomContent?: JSX.Element;
  imageStyle?: ViewStyle;
}

const LayoutTemplate: React.FC<Props> = ({
  topContent,
  bottomContent,
  imageStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../../assets/images/cloudy.jpg")}
          style={styles.image}
        />
        {topContent}
        <View style={styles.overlay} />
      </View>
      {bottomContent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "48%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
  },
});

export default LayoutTemplate;
