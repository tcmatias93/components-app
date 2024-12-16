import { useState } from "react";
import { Switch } from "react-native";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemeCard>
        <ThemedSwitch
          text={state.isActive ? "Activo" : "Activar"}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
          className="mb-4"
        />

        <ThemedSwitch
          text={"Hambriento"}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          value={state.isHungry}
          className="mb-4"
        />

        <ThemedSwitch
          text={"Contento"}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          value={state.isHappy}
          className="mb-4"
        />

        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor={"#3e3e3e"}
          value={state.isActive}
          onValueChange={toggleSwitch}
        /> */}
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
