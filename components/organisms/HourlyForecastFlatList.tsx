import { FC, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import TemperatureImage from "../molecules/TemperatureImage";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";
import { Hourly } from "@/interfaces/models/MainResponse.models";
import Moment from "moment";

interface Props {
  hourlyResponse?: Hourly;
  isTomorrow: boolean;
}

const HourlyForecastFlatList: FC<Props> = ({
  hourlyResponse,
  isTomorrow,
}): JSX.Element => {
  const mappedHourlyData = hourlyResponse?.time.map((time, index) => ({
    time,
    temperature: hourlyResponse.temperature_2m[index],
  }));

  const fiveIncomingHours = mappedHourlyData
    ?.filter((item) => Moment(item.time).isSameOrAfter(Moment()))
    .slice(0, 5);

  const fiveTomorrowIHours = mappedHourlyData?.slice(0, 5);

  const { width } = Dimensions.get("window");
  const itemWidth = width / 5 - 10;

  return (
    <FlatList
      keyExtractor={(item) => item.time}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={isTomorrow ? fiveTomorrowIHours : fiveIncomingHours}
      renderItem={({ item }) => {
        return (
          <View style={{ width: itemWidth }}>
            <TemperatureImage
              condition={`${Math.round(item.temperature)}°C`}
              time={Moment(item.time).format("HH:mm")}
              Icon={() => (
                <CloudAndSun
                  width={20}
                  height={20}
                  style={{ marginVertical: 5 }}
                />
              )}
              topTextStyle={styles.title}
              bottomTextStyle={styles.title}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "black",
  },
});

export default HourlyForecastFlatList;
