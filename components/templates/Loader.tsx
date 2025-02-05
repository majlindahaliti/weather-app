import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loader() {
  return (
    <View style={styles.overlay}>
      <View style={styles.centeredContent}>
        <LottieView
          source={require("../../assets/loader.json")}
          style={styles.animation}
          autoPlay
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 100,
    height: 100,
  },
});
