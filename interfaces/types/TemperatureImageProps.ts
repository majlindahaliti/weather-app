import { FC } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

export type TemperatureImageProps = {
  style?: ViewStyle;
  imgWidth?: number;
  imgHeight?: number;
  time?: string;
  condition?: string;
};
