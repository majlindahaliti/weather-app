import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import { SvgProps } from "react-native-svg";
import { Divider } from "@rneui/themed";

interface Props {
  Icon?: FC<SvgProps>;
}

const CountryWeatherCondition: FC<Props> = ({ Icon }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.tempTextContainer}>
        <Text style={styles.title}>1°</Text>
        <Text style={styles.title}>2°</Text>
      </View>
      <Divider
        orientation="vertical"
        style={{ marginHorizontal: 15 }}
        color="gray"
      />
      <CloudAndSun width={40} height={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 14,
  },
  tempTextContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
});

export default CountryWeatherCondition;
