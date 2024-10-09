import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../../resources/theme/theme";
import Icon from "../Icon";
import { THEME_DATA } from "../../../../resources/theme/testing_data/theme_data";

const theme = THEME_DATA;

describe("Default Icon", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <Icon
            iconName="add"
            iconType="MaterialIcons"
            size={24}
            color={theme.colors.staticBlack}
          />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <Icon
            iconName="add"
            iconType="MaterialIcons"
            size={24}
            color={theme.colors.staticBlack}
          />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
