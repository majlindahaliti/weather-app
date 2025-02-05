import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import TemperatureImage from "../molecules/TemperatureImage";
import { TemperatureSectionProps } from "@/interfaces/types/TemperatureSectionProps";

const TemperatureSection: FC<TemperatureSectionProps> = ({
  style,
  tempTextStyle,
  condition,
  Icon,
  currentTemp,
}): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={[styles.tempStyle, tempTextStyle]}>{currentTemp}</Text>
        <Text style={styles.regularText}>feels like 2°</Text>
      </View>
      <TemperatureImage
        style={{ marginRight: -10 }}
        condition={condition}
        Icon={Icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  tempStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 64,
    color: "white",
    marginBottom: -10,
  },
  regularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "white",
    marginLeft: -10,
  },
});

export default TemperatureSection;
