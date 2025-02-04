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

export default function MainScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Today");
  const router = useRouter();

  const latitude = 51.5074; // Example latitude for London
  const longitude = -0.1278; // Example longitude for London
  const timezone = "Europe/London"; // Example timezone

  // const { data, error, isLoading } = useFetchMainDataQuery(
  //   latitude,
  //   longitude,
  //   timezone
  // );

  // console.log("returned data", data);

  const goToCountries = () => {
    router.push("/countries");
  };

  const topContent = (
    <View style={styles.contentContainer}>
      <CardHeaderSection onButtonPress={goToCountries} />
      <TemperatureSection style={{ marginTop: 40 }} Icon={CloudAndSun} />
      <CardFooterSection />
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
      {selectedCategory !== "10 days" ? (
        <>
          <ConditionCardsGrid />
          <HourlyForecastContainer />
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
