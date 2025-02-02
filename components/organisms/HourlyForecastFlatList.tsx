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
interface Props {}

const HourlyForecastFlatList: FC<Props> = (): JSX.Element => {
  var items = ["cloudy", "rainy", "sun", "wind", "sunny"];
  const { width } = Dimensions.get("window");
  const itemWidth = width / items.length - 10;

  return (
    <FlatList
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={items}
      renderItem={({ item }) => {
        return (
          <View style={{ width: itemWidth }}>
            <TemperatureImage
              condition={item}
              time={item}
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
