import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import LayoutTemplate from "@/components/templates/LayoutTemplate";
import CardHeaderSection from "@/components/molecules/CardHeaderSection";
import TemperatureSection from "@/components/organisms/TemperatureSection";
import CardFooterSection from "@/components/molecules/CardFooterSection";
import Categories from "@/components/molecules/Categories";
import ConditionCardsGrid from "@/components/organisms/ConditionCardsGrid";
import HourlyForecastContainer from "@/components/organisms/HourlyForecastContainer";
import CloudAndSun from "../assets/images/cloud_and_sun.svg";
import CountriesList from "@/components/organisms/CountriesList";
import { useFetchMainDataQuery } from "@/react-query/hooks/home.hooks";
import Moment from "moment";
import { getWeatherCondition } from "@/config/weatherConditions";

export default function MainScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Today");
  const router = useRouter();

  const latitude = 51.5074;
  const longitude = -0.1278;
  const timezone = "Europe/London";

  const { data, error, isLoading } = useFetchMainDataQuery(
    latitude,
    longitude,
    timezone
  );

  const goToCountries = () => {
    router.push("/countries");
  };

  console.log("returned data", data);

  // Bottom part values
  const currentTemp = `${Math.round(data?.current_weather.temperature ?? 0)} ${
    data?.current_weather_units.temperature
  }`;
  const currentMinTemp = `${Math.round(
    data?.daily.temperature_2m_min[0] ?? 0
  )} ${data?.daily_units.temperature_2m_min}`;
  const currentMaxTemp = `${Math.round(
    data?.daily.temperature_2m_max[0] ?? 0
  )} ${data?.daily_units.temperature_2m_max}`;
  const currentDateTime = Moment(data?.current_weather.time).format(
    "MMMM D, HH:mm"
  );

  const currentWeatherCondition = getWeatherCondition(
    data?.current_weather.weathercode || 0
  );

  //Bottom part values
  const windSpeed: number[] = data?.daily.wind_speed_10m_max ?? [];
  const precipitation: number[] = data?.daily.precipitation_sum ?? [];
  const pressure: number[] = data?.daily.pressure_msl_max ?? [];
  const uvIndex: number[] = data?.daily.uv_index_max ?? [];

  const topContent = (
    <View style={styles.contentContainer}>
      <CardHeaderSection title={data?.timezone} onButtonPress={goToCountries} />
      <TemperatureSection
        style={{ marginTop: 40 }}
        Icon={CloudAndSun}
        currentTemp={currentTemp}
        condition={currentWeatherCondition}
      />
      <CardFooterSection
        minTemp={currentMinTemp}
        maxTemp={currentMaxTemp}
        dateTime={currentDateTime}
      />
    </View>
  );

  const bottomContent = (
    <View style={{ margin: 20 }}>
      <Categories
        selectedCategory={selectedCategory}
        onPress={(category) => {
          setSelectedCategory(category);
        }}
      />
      {selectedCategory === "Today" ? (
        <>
          <ConditionCardsGrid
            windSpeed={windSpeed[0] ?? 0}
            rainChance={precipitation[0] ?? 0}
            pressure={pressure[0] ?? 0}
            UVIndex={uvIndex[0] ?? 0}
          />
          <HourlyForecastContainer
            hourlyResponse={data?.hourly}
            isTomorrow={false}
          />
        </>
      ) : selectedCategory === "Tomorrow" ? (
        <>
          <ConditionCardsGrid
            windSpeed={windSpeed[1] ?? 0}
            rainChance={precipitation[1] ?? 0}
            pressure={pressure[1] ?? 0}
            UVIndex={uvIndex[1] ?? 0}
          />
          <HourlyForecastContainer
            hourlyResponse={data?.hourly}
            isTomorrow={true}
          />
        </>
      ) : (
        <View>
          <CountriesList />
        </View>
      )}
    </View>
  );

  return (
    <LayoutTemplate topContent={topContent} bottomContent={bottomContent} />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    position: "absolute",
    zIndex: 1,
    marginTop: 65,
    marginHorizontal: 20,
  },
});
