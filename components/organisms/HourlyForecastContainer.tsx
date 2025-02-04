import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import HourlyIcon from "../../assets/images/hourlIcon.svg";
import HourlyForecastFlatList from "./HourlyForecastFlatList";
import { Hourly } from "@/interfaces/models/MainResponse.models";

interface Props {
  hourlyResponse?: Hourly;
  isTomorrow: boolean;
}

const HourlyForecastContainer: FC<Props> = ({
  hourlyResponse,
  isTomorrow,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <HourlyIcon />
        <Text style={styles.title}>Hourly Forecast</Text>
      </View>
      <HourlyForecastFlatList
        hourlyResponse={hourlyResponse}
        isTomorrow={isTomorrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#36569F" + 20,
    borderRadius: 10,
    height: 140,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "black",
    marginLeft: 10,
  },
});

export default HourlyForecastContainer;
