import WindIcon from "../assets/images/windIcon.svg";
import RainChancesIcon from "../assets/images/rainChance.svg";
import PressureIcon from "../assets/images/pressure.svg";
import UVIndexIcon from "../assets/images/UVIndexIcon.svg";
import { SvgProps } from "react-native-svg";
import { FC } from "react";

interface ConditionItem {
  id: number;
  title: string;
  icon: FC<SvgProps>;
  value?: string;
}

export const conditionsList: ConditionItem[] = [
  {
    id: 1,
    title: "Wind Speed",
    icon: WindIcon,
  },
  {
    id: 2,
    title: "Rain Chance",
    icon: RainChancesIcon,
  },
  {
    id: 3,
    title: "Pressure",
    icon: PressureIcon,
  },
  {
    id: 4,
    title: "UV Index",
    icon: UVIndexIcon,
  },
];
