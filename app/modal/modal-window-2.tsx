import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedButton from "@/presentation/shared/ThemedButton";
import { router } from "expo-router";

const ModalTwoScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Hola, Soy otro modal</ThemedText>

      <ThemedButton onPress={() => router.dismissAll()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalTwoScreen;
