import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  minTemp?: string;
  maxTemp?: string;
  dateTime?: string;
}

const CardFooterSection: FC<Props> = ({
  minTemp,
  maxTemp,
  dateTime,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.regularText, { fontSize: 16 }]}>{dateTime}</Text>
      <View>
        <Text style={[styles.tempStyle, { fontSize: 16 }]}>Day {maxTemp}</Text>
        <Text style={[styles.tempStyle, { fontSize: 16 }]}>
          Night {minTemp}
        </Text>
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
