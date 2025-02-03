import { FC } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { conditionsList } from "@/config/data";
import CountryItem from "./CountryItem";

interface Props {}

const CountriesList: FC<Props> = (): JSX.Element => {
  return (
    <FlatList
      data={conditionsList}
      renderItem={({ item }) => (
        <CountryItem title={item.title} Icon={item.icon} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({});

export default CountriesList;
