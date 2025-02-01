import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function MainScreen() {
  const router = useRouter();

  const goToCountries = () => {
    router.push("/countries");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main Screen</Text>
      <Button title="Go to Countries" onPress={goToCountries} />
    </View>
  );
}
