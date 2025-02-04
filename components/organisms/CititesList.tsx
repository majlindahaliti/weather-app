import { FC, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CityItem from "../molecules/CityItem";
import { conditionsList } from "@/config/data";

interface Props {
  cities: any;
}

const CititesList: FC<Props> = ({ cities }): JSX.Element => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cities}
      renderItem={({ item }) => <CityItem cityName={item.name} />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({});

export default CititesList;
