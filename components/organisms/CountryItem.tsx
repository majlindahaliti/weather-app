import { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";
import CountryWeatherCondition from "../molecules/CountryWeatherCondition";

interface Props {
  title: string;
  Icon?: FC<SvgProps>;
}

const CountryItem: FC<Props> = ({ title, Icon }): JSX.Element => {
  return (
    <View style={[styles.container, { width: "100%" }]}>
      <View style={{ marginLeft: 10 }}>
        <Text>{title}</Text>
        <Text style={styles.title}>Value</Text>
      </View>
      <CountryWeatherCondition />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#36569F" + 20,
    height: 70,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 14,
  },
});

export default CountryItem;
