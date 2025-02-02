import { FC } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import ConditionCard from "@/components/molecules/ConditionCard";
import { conditionsList } from "@/config/data";

interface Props {}

const ConditionList: FC<Props> = (): JSX.Element => {
  const { width } = Dimensions.get("window");

  return (
    <FlatList
      data={conditionsList}
      renderItem={({ item }) => (
        <ConditionCard title={item.title} Icon={item.icon} />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
});

export default ConditionList;
