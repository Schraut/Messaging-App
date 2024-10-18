import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../../resources/theme/theme";
import TestComponent from "../TestComponent";

describe("Default TestComponent", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <TestComponent />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <TestComponent />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
