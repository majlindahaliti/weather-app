import { FC } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import TemperatureImage from "../molecules/TemperatureImage";
import { SvgProps } from "react-native-svg";
import { TemperatureSectionProps } from "@/interfaces/types/TemperatureSectionProps";

const TemperatureSection: FC<TemperatureSectionProps> = ({
  style,
  tempTextStyle,
  condition,
  Icon,
}): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={[styles.tempStyle, tempTextStyle]}>4°</Text>
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
    fontSize: 74,
    color: "white",
    marginBottom: -10,
  },
  regularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "white",
    marginLeft: -20,
  },
});

export default TemperatureSection;
