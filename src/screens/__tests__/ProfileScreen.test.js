import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../resources/theme/theme";
import ProfileScreen from "../profile/ProfileScreen";

describe("Default ProfileScreen", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <ProfileScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <ProfileScreen />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
