import { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import RightArrow from "../../assets/images/rightArrow.svg";

interface Props {
  cityName: string;
}

const CityItem: FC<Props> = ({ cityName }): JSX.Element => {
  return (
    <View style={[styles.container, { width: "100%" }]}>
      <Text style={styles.title}>{cityName}</Text>
      <RightArrow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#36569F" + 20,
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 16,
  },
});

export default CityItem;
