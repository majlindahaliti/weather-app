import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import LayoutTemplate from "@/components/templates/LayoutTemplate";
import CardHeaderSection from "@/components/molecules/CardHeaderSection";
import TemperatureSection from "@/components/organisms/TemperatureSection";
import CardFooterSection from "@/components/molecules/CardFooterSection";
import Categories from "@/components/molecules/Categories";
import ConditionCardsGrid from "@/components/organisms/ConditionCardsGrid";
import HourlyForecastContainer from "@/components/organisms/HourlyForecastContainer";
import CloudAndSun from "../assets/images/cloud_and_sun.svg";
import WeatherDataList from "@/components/organisms/WeatherDataList";
import { useFetchMainDataQuery } from "@/react-query/hooks/home.hooks";
import Moment from "moment";
import { getWeatherCondition } from "@/config/weatherConditions";
import { useCurrentWeatherData } from "@/store/currentWeatherData.store";
import { useLocalSearchParams } from "expo-router";
import { useLoaderStore } from "@/store/loader.store";

export default function MainScreen() {
  const router = useRouter();
  const { city } = useLocalSearchParams();
  const parsedCity = city
    ? JSON.parse(decodeURIComponent(city as string))
    : null;

  const [cityData, setCityData] = useState();
  const [selectedCategory, setSelectedCategory] = useState<string>("Today");
  const [canGoBack, setCanGoBack] = useState(false);

  //store
  const { setTitle, setCurrentTemp } = useCurrentWeatherData();
  const { setIsLoading } = useLoaderStore();

  const { data, error, isLoading } = useFetchMainDataQuery(
    parsedCity?.latitude ?? 51.5074,
    parsedCity?.longitude ?? -0.1278
  );

  const goToCountries = () => {
    router.push("/countries");
  };

  const goBack = () => {
    router.back();
  };

  // Top part values
  const currentTemp = data?.current_weather?.temperature
    ? `${Math.round(data.current_weather.temperature)} ${
        data.current_weather_units?.temperature ?? ""
      }`
    : "";

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

  //useEffects
  useEffect(() => {
    if (data) {
      setTitle(data.timezone);
      setCurrentTemp(currentTemp);
    }
    setIsLoading(isLoading);
  }, [data, isLoading, setTitle, setCurrentTemp, setIsLoading]);

  useEffect(() => {
    if (parsedCity) {
      setCityData(cityData);
    }
  }, [parsedCity]);

  useFocusEffect(
    React.useCallback(() => {
      setCanGoBack(router.canGoBack());

      return () => {
        setCanGoBack(false);
      };
    }, [router])
  );

  const topContent = (
    <View style={styles.contentContainer}>
      <CardHeaderSection
        title={parsedCity?.name ?? data?.timezone}
        onButtonPress={goToCountries}
        showBackButton={canGoBack}
        onBackButtonPress={goBack}
      />
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
    <View style={{ flex: 1, margin: 20 }}>
      <Categories
        selectedCategory={selectedCategory}
        onPress={(category) => {
          setSelectedCategory(category);
        }}
      />
      {selectedCategory === "Today" ? (
        <View>
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
        </View>
      ) : selectedCategory === "Tomorrow" ? (
        <View>
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
        </View>
      ) : (
        <WeatherDataList isDays={true} dailyResponse={data?.daily} />
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
