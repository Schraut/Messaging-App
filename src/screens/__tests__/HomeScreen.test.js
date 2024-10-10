import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../resources/theme/theme";
import HomeScreen from "../HomeScreen";

describe("Default HomeScreen", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <HomeScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <HomeScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
