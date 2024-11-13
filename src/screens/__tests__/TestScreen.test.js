import React from "react";
import renderer from "react-test-renderer";
import TestScreen from "../test_screen/TestScreen";
import ThemeContent from "../../../resources/theme/theme";

describe("Default TestScreen", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <TestScreen />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <TestScreen />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
