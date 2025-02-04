import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import WeatherDataItem from "./WeatherDataItem";
import { Daily } from "@/interfaces/models/MainResponse.models";
import Moment from "moment";
import CloudAndSun from "../../assets/images/cloud_and_sun.svg";

interface Props {
  isDays: Boolean;
  dailyResponse?: Daily;
}

const WeatherDataList: FC<Props> = ({ isDays, dailyResponse }): JSX.Element => {
  const dailyResponseData = dailyResponse?.time.map((time, index) => ({
    title: Moment(time).format("MMM D"),
    minTemp: `${Math.round(dailyResponse.temperature_2m_min[index])}°`,
    maxTemp: `${Math.round(dailyResponse.temperature_2m_max[index])}°`,
  }));

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dailyResponseData}
      renderItem={({ item }) => (
        <WeatherDataItem
          title={item.title}
          subtitle="Cloudy"
          Icon={CloudAndSun}
          minTemp={item.minTemp}
          maxTemp={item.maxTemp}
        />
      )}
      keyExtractor={(item) => item.title}
      contentContainerStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({});

export default WeatherDataList;
