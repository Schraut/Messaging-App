import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../resources/theme/theme";
import MessagesScreen from "../MessagesScreen";

describe("Default MessagesScreen", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <MessagesScreen />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <MessagesScreen />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
