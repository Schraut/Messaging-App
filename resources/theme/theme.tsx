import React, { createContext } from "react";
import { useColorScheme } from "react-native";

import COLORS from "./colors";
import { type Colors } from "./colors";
import FONTS from "./fonts";
import { spacing } from "./spacing";
import { Font } from "./fonts";

export type Theme = {
  colors: Colors;
  font: Font;
  spacing: (value: number) => number;
};

const ThemeContext = createContext<Theme>({
  colors: COLORS["light"],
  font: FONTS,
  spacing: spacing,
});

export default function ThemeContent({
  children,
  isDarkMode,
}: {
  children: any;
  isDarkMode?: boolean;
}) {
  const colorScheme = useColorScheme();
  const themeColor =
    isDarkMode === true
      ? "dark"
      : colorScheme === "dark"
        ? colorScheme
        : "light";
  const theme: Theme = {
    colors: COLORS[themeColor],
    font: FONTS,
    spacing: spacing,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
