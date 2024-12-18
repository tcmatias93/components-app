import { useEffect } from "react";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { allRoutes } from "@/constants/Routes";

import "../global.css";
import { ThemeChangeProvider } from "@/presentation/context/ThemeChangerContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      {/*  <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <ThemeChangeProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: "" }} />

          {allRoutes.map((route) => (
            <Stack.Screen
              name={route.title}
              key={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
      </ThemeChangeProvider>

      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
