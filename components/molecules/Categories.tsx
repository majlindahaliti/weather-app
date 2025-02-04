import { FC, useState } from "react";
import { Chip } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

interface Props {
  selectedCategory: string;
  onPress: (category: string) => void;
}

const categories = ["Today", "Tomorrow", "7 days"];

const Categories: FC<Props> = ({ onPress, selectedCategory }): JSX.Element => {
  // const [selectedCategory, setSelectedCategory] = useState<string>(
  //   categories[0]
  // );

  const handleCategoryPress = (category: string) => {
    // setSelectedCategory(category);
    onPress(category);
  };

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
          onPress={() => handleCategoryPress(category)}
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
