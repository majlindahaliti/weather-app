import { FC } from "react";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import ListIcon from "../../assets/images/listIcon.svg";
import BackButon from "../../assets/images/back.svg";
import { MainResponse } from "@/interfaces/models/MainResponse.models";

interface Props {
  onButtonPress: () => void;
  showBackButton?: Boolean;
  title?: string;
}

const CardHeaderSection: FC<Props> = ({
  onButtonPress,
  showBackButton,
  title,
}): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {showBackButton && (
          <Button
            onPress={onButtonPress}
            icon={<BackButon />}
            buttonStyle={{
              width: 40,
              height: 40,
              backgroundColor: "transparent",
            }}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {!showBackButton && (
        <Button
          onPress={onButtonPress}
          icon={<ListIcon />}
          buttonStyle={{
            width: 40,
            height: 40,
            backgroundColor: "transparent",
          }}
        />
      )}
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
