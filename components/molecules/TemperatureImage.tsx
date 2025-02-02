import { FC } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import { TemperatureImageProps } from "@/interfaces/types/TemperatureImageProps";

const TemperatureImage: FC<TemperatureImageProps> = ({
  style,
  imgWidth,
  imgHeight,
  time,
  condition,
}: TemperatureImageProps): JSX.Element => {
  return (
    <View style={[style, { alignItems: "center" }]}>
      <CloudAndSun />
      <Text style={styles.title}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontSize: 18,
  },
});

export default TemperatureImage;
