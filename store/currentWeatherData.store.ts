import { create } from "zustand";

type CurrentWeatherDataStore = {
  title: string;
  currentTemp: string;
  currentCondition: string;
  setTitle: (title: string) => void;
  setCurrentTemp: (title: string) => void;
  setCurrentCondition: (currentCondition: string) => void;
};

export const useCurrentWeatherData = create<CurrentWeatherDataStore>((set) => ({
  title: "",
  currentTemp: "",
  currentCondition: "",
  setTitle(title: string) {
    set(() => ({ title }));
  },
  setCurrentTemp(currentTemp: string) {
    set(() => ({ currentTemp }));
  },
  setCurrentCondition(currentCondition: string) {
    set(() => ({ currentCondition }));
  },
}));
