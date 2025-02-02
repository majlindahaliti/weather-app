import { View, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import TemperatureSection from "@/components/organisms/TemperatureSection";
import CardFooterSection from "@/components/molecules/CardFooterSection";
import CardHeaderSection from "@/components/molecules/CardHeaderSection";
import Categories from "@/components/molecules/Categories";
import ConditionCardsGrid from "@/components/organisms/ConditionCardsGrid";
import HourlyForecastContainer from "@/components/organisms/HourlyForecastContainer";

export default function MainScreen() {
  const router = useRouter();

  const goToCountries = () => {
    router.push("/countries");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/cloudy.jpg")}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          {/* header section */}
          <CardHeaderSection onButtonPress={goToCountries} />
          {/* temperature section */}
          <TemperatureSection />
          {/* footer section */}
          <CardFooterSection />
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Categories />
        <ConditionCardsGrid />
        <HourlyForecastContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
  },
  contentContainer: {
    position: "absolute",
    zIndex: 1,
    marginTop: 65,
    marginHorizontal: 20,
  },
});
