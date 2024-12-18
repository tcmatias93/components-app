import { RefreshControl, ScrollView } from "react-native";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const primaryColor = useThemeColor({}, "primary");
  const backgrounColor = useThemeColor(
    { dark: "black", light: "white" },
    "primary"
  );

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "green"]}
          progressBackgroundColor={backgrounColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
