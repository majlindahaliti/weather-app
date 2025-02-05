import { FC, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CityItem from "../molecules/CityItem";
import { conditionsList } from "@/config/data";
import { CityData } from "@/interfaces/models/CityData.models";

interface Props {
  cities: CityData[];
  onPress: (city: CityData) => void;
}

const CititesList: FC<Props> = ({ cities, onPress }): JSX.Element => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cities}
      renderItem={({ item }) => (
        <CityItem cityName={item.name} onPress={() => onPress(item)} />
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({});

export default CititesList;
