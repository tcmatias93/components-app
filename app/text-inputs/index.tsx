import ThemeCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo electronico"
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Numero de telefono"
              keyboardType="phone-pad"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>

          <ThemeCard
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemedTextInput
              placeholder="Numero de telefono"
              keyboardType="phone-pad"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
