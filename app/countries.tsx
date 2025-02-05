import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import LayoutTemplate from "@/components/templates/LayoutTemplate";
import CardHeaderSection from "@/components/molecules/CardHeaderSection";
import CustomSearchComponent from "@/components/molecules/CustomSearchBar";
import TemperatureSection from "@/components/organisms/TemperatureSection";
import CloudAndSun from "../assets/images/cloud_and_sun.svg";
import { useCurrentWeatherData } from "@/store/currentWeatherData.store";
import { useEffect, useState } from "react";
import EmptyDataView from "@/components/templates/EmptyView";
import CititesList from "@/components/organisms/CititesList";
import { CityData } from "@/interfaces/models/CityData.models";

export default function CountriesScreen() {
  const router = useRouter();

  //state
  const [citiesData, setCitiesData] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  //store
  const { title, currentTemp } = useCurrentWeatherData();

  //useEffects
  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const cities = require("../assets/topCities.json");
        setCitiesData(cities);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchCitiesData();
  }, []);

  //functions
  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  const goBack = () => {
    router.back();
  };

  const showMainScreen = (city: CityData) => {
    router.push(`/?longitude=${city.longitude}&latitude=${city.latitude}`);
  };

  //content
  const topContent = (
    <View style={styles.contentContainer}>
      <CardHeaderSection
        onBackButtonPress={goBack}
        showBackButton={true}
        title={title}
      />
      <CustomSearchComponent search={search} setSearch={setSearch} />
      <TemperatureSection
        currentTemp={currentTemp}
        style={{ marginTop: 10 }}
        tempTextStyle={{ fontSize: 60 }}
        Icon={() => <CloudAndSun width={70} height={70} />}
      />
    </View>
  );

  const bottomContent = (
    <View style={{ marginHorizontal: 20, flex: 1 }}>
      {filteredCities.length != 0 ? (
        <CititesList
          cities={filteredCities}
          onPress={(city) => showMainScreen(city)}
        />
      ) : (
        <EmptyDataView />
      )}
    </View>
  );

  return (
    <LayoutTemplate
      imageStyle={{ height: "35%" }}
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
  animation: {
    width: 120,
    height: 120,
  },
});
