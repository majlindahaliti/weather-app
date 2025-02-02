import { FC } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export type TemperatureImageProps = {
  style?: ViewStyle;
  Icon?: FC<SvgProps>;
  time?: string;
  condition?: string;
  topTextStyle?: TextStyle;
  bottomTextStyle?: TextStyle;
};
