import { FC, useState } from "react";
import { Chip } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

interface Props {}

const categories = ["Today", "Tomorrow", "10 days"];

const Categories: FC<Props> = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Chip
          key={index}
          title={category}
          buttonStyle={{
            backgroundColor:
              selectedCategory === category ? "#36569F" + 20 : "white",
            borderRadius: 10,
          }}
          containerStyle={styles.chipContainer}
          titleStyle={styles.title}
          onPress={() => setSelectedCategory(category)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  chipContainer: {
    borderRadius: 10,
    width: 100,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "black",
  },
});

export default Categories;
