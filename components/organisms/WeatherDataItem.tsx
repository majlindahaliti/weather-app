import { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";
import WeatherItemTemp from "../molecules/WeatherItemTemp";

interface Props {
  title: string;
  subtitle: string;
  Icon?: FC<SvgProps>;
  minTemp: string;
  maxTemp: string;
}

const WeatherDataItem: FC<Props> = ({
  title,
  Icon,
  subtitle,
  minTemp,
  maxTemp,
}): JSX.Element => {
  return (
    <View style={[styles.container, { width: "100%" }]}>
      <View style={{ marginLeft: 10 }}>
        <Text style={[styles.title, { fontFamily: "Poppins-SemiBold" }]}>
          {title}
        </Text>
        <Text style={styles.title}>{subtitle}</Text>
      </View>
      <WeatherItemTemp minTemp={minTemp} maxTemp={maxTemp} />
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

export default WeatherDataItem;
