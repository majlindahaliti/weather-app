import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import LayoutTemplate from "@/components/templates/LayoutTemplate";
import CardHeaderSection from "@/components/molecules/CardHeaderSection";
import CustomSearchComponent from "@/components/molecules/CustomSearchBar";
import TemperatureSection from "@/components/organisms/TemperatureSection";
import CloudAndSun from "../assets/images/cloud_and_sun.svg";
import WeatherDataList from "@/components/organisms/WeatherDataList";
import { useCurrentWeatherData } from "@/store/currentWeatherData.store";

export default function CountriesScreen() {
  const router = useRouter();
  //store
  const { title, currentTemp, currentCondition } = useCurrentWeatherData();

  const goBack = () => {
    router.back();
  };

  const topContent = (
    <View style={styles.contentContainer}>
      <CardHeaderSection
        onButtonPress={goBack}
        showBackButton={true}
        title={title}
      />
      <CustomSearchComponent />
      <TemperatureSection
        currentTemp={currentTemp}
        style={{ marginTop: 10 }}
        tempTextStyle={{ fontSize: 60 }}
        Icon={() => <CloudAndSun width={70} height={70} />}
      />
    </View>
  );

  const bottomContent = (
    <View style={{ marginHorizontal: 20 }}>
      <WeatherDataList isDays={false} />
    </View>
  );

  return (
    <LayoutTemplate
      imageStyle={{ height: "33%" }}
      topContent={topContent}
      bottomContent={bottomContent}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    position: "absolute",
    top: 65,
    left: 20,
    right: 20,
    zIndex: 1,
    paddingTop: 10,
  },
});
