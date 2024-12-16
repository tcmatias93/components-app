import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert } from "react-native";

const AlertsScreen = () => {
  const createOneButtonAlert = () =>
    Alert.alert("Alert Title", "My alert msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
      },
    ]);

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My alert msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
      },
    ]);

  return (
    <ThemedView margin>
      <ThemedButton className="mb-4" onPress={createOneButtonAlert}>
        Buton Allert 1
      </ThemedButton>
      <ThemedButton onPress={createTwoButtonAlert}>Buton Allert 2</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
