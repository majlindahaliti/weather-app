import { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import RightArrow from "../../assets/images/rightArrow.svg";

interface Props {
  cityName: string;
  onPress: () => void;
}

const CityItem: FC<Props> = ({ cityName, onPress }): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: "100%" }]}>
        <Text style={styles.title}>{cityName}</Text>
        <RightArrow />
      </View>
    </TouchableOpacity>
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
