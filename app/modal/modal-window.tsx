import React from "react";
import { Platform } from "react-native";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedButton from "@/presentation/shared/ThemedButton";

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Hola, Soy un modal</ThemedText>

      <ThemedButton onPress={() => router.push("/modal/modal-window-2")}>
        Otro modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()} className="mt-4">
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
