import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link asChild href={"/modal/modal-window"} className="mx-4">
        <ThemedText type="link" className="my-2 text-xl">
          Abrir modal
        </ThemedText>
      </Link>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window")}
        className="mx-4"
      >
        Abril modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
