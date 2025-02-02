import { FC } from "react";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import ListIcon from "../../assets/images/listIcon.svg";

interface Props {}

const CardFooterSection: FC<Props> = (): JSX.Element => {
  return (
    <View
      style={{
        marginTop: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.regularText, { fontSize: 16 }]}>
        January, 18 16:44
      </Text>
      <View>
        <Text style={[styles.tempStyle, { fontSize: 16 }]}>Day 2°</Text>
        <Text style={[styles.tempStyle, { fontSize: 16 }]}>Night -2°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tempStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "white",
  },
  regularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "white",
  },
});

export default CardFooterSection;
