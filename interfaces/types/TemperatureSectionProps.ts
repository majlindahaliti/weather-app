import { FC } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export type TemperatureSectionProps = {
  style?: ViewStyle;
  tempTextStyle?: TextStyle;
  condition?: string;
  Icon?: FC<SvgProps>;
  currentTemp?: string;
};
