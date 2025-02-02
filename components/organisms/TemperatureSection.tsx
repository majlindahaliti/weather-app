import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import TemperatureImage from "../molecules/TemperatureImage";

interface Props {}

const TemperatureSection: FC<Props> = (): JSX.Element => {
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={styles.tempStyle}>4°</Text>
        <Text style={styles.regularText}>feels like 2°</Text>
      </View>
      <TemperatureImage
        style={{ marginRight: -10 }}
        condition="Cloudy"
        Icon={CloudAndSun}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
