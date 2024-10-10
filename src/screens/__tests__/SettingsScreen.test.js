import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../resources/theme/theme";
import SettingsScreen from "../SettingsScreen";

describe("Default SettingsScreen", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <SettingsScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <SettingsScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
