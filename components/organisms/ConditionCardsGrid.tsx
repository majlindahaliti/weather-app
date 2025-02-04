import { FC } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ConditionCard from "@/components/molecules/ConditionCard";
import { conditionsList } from "@/config/data";
import { WetherConditionsProps } from "@/interfaces/types/WeatherConditionsProps";

const ConditionList: FC<WetherConditionsProps> = ({
  windSpeed,
  rainChance,
  pressure,
  UVIndex,
}): JSX.Element => {
  const updatedConditionsList = conditionsList.map((condition) => {
    switch (condition.title) {
      case "Wind Speed":
        return { ...condition, value: `${windSpeed} km/h` };
      case "Rain Chance":
        return { ...condition, value: `${rainChance} mm` };
      case "Pressure":
        return { ...condition, value: `${pressure} hPa` };
      case "UV Index":
        return { ...condition, value: `${UVIndex}` };
      default:
        return condition;
    }
  });

  return (
    <FlatList
      data={updatedConditionsList}
      renderItem={({ item }) => (
        <ConditionCard title={item.title} Icon={item.icon} value={item.value} />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={{
        marginTop: 20,
      }}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
});

export default ConditionList;
