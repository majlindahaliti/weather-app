import { FC } from "react";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import ListIcon from "../../assets/images/listIcon.svg";

interface Props {
  onButtonPress: () => void;
}

const CardHeaderSection: FC<Props> = ({ onButtonPress }): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Title goes here</Text>
      <Button
        onPress={onButtonPress}
        icon={<ListIcon />}
        buttonStyle={{
          width: 40,
          height: 40,
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "white",
  },
});

export default CardHeaderSection;
