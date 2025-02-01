import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function CountriesScreen() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Countries Screen</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
}
