export const weatherConditonCode: { [key: number]: string } = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  4: "Overcast",
  5: "Fog",
  6: "Light snow",
  7: "Heavy snow",
  8: "Light rain",
  9: "Heavy rain",
  10: "Thunderstorm",
};

export const getWeatherCondition = (weatherCode: number): string => {
  return weatherConditonCode[weatherCode] || "Unknown";
};
