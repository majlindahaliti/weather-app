import { FC } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

interface Props {}
const EmptyDataView: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/emptyData.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 120,
    height: 120,
    marginTop: -40,
  },
});

export default EmptyDataView;
