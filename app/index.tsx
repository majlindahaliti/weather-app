import React from "react";
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

export default function MainScreen() {
  const router = useRouter();

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
      <Categories />
      <ConditionCardsGrid />
      <HourlyForecastContainer />
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
