import { FC } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import { TemperatureImageProps } from "@/interfaces/types/TemperatureImageProps";

const TemperatureImage: FC<TemperatureImageProps> = ({
  style,
  Icon,
  time,
  condition,
  topTextStyle,
  bottomTextStyle,
}: TemperatureImageProps): JSX.Element => {
  return (
    <View style={[style, { alignItems: "center" }]}>
      {time && <Text style={[styles.title, topTextStyle]}>{time}</Text>}
      {Icon && <Icon />}
      {condition && (
        <Text style={[styles.title, bottomTextStyle]}>{condition}</Text>
      )}
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
