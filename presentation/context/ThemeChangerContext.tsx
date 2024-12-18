import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

interface ThemeChangeContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangeContext = createContext({} as ThemeChangeContextType);

// Custom Hook para acceder al ThemeChangeContext

export const useThemeChangeContext = () => {
  const themeChange = useContext(ThemeChangeContext);

  return themeChange;
};

// Provider

export const ThemeChangeProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
    ? "dark"
    : "light";

  useEffect(() => {
    AsyncStorage.getItem("elected-theme").then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === "dark");
      setIsSystemThemeEnabled(theme === "system");
      setColorScheme(theme as "light" | "dark" | "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangeContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemThemeEnabled,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnabled(false);

            //Guardar en Storage
            await AsyncStorage.setItem(
              "selected-theme",
              isDarkMode ? "light" : "dark"
            );
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");

            //Guardar en Storage
            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangeContext.Provider>
    </ThemeProvider>
  );
};
