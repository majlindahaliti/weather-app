import { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import WindIcon from "../../assets/images/windIcon.svg";
import { SvgProps } from "react-native-svg";

interface Props {
  title: string;
  Icon?: FC<SvgProps>;
}

const ConditionCard: FC<Props> = ({ title, Icon }): JSX.Element => {
  const { width } = Dimensions.get("window");
  const cardWidth = width / 2 - 30;
  return (
    <View style={[styles.container, { width: cardWidth }]}>
      {Icon && <Icon />}
      <View style={{ marginLeft: 10 }}>
        <Text>{title}</Text>
        <Text style={styles.title}>Value</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#36569F" + 20,
    height: 65,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontFamily: "Poppins-Regular",
    color: "black",
    fontSize: 14,
  },
});

export default ConditionCard;
