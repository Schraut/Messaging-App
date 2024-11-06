import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../../resources/theme/theme";
import { THEME_DATA } from "../../../../resources/theme/testing_data/theme_data";
import Icon from "../../icon/Icon";
import SettingsButton from "../SettingsButton";

const theme = THEME_DATA;

describe("Default Round Button", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <SettingsButton
            onPress={() => console.log("Pressed")}
            color={theme.colors.background}
            icon={
              <Icon
                iconName="settings"
                iconType="MaterialIcons"
                size={24}
                color={theme.colors.inverseBackground}
              />
            }
          />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders in dark mode", () => {
    const tree = renderer
      .create(
        <ThemeContent isDarkMode={true}>
          <SettingsButton
            onPress={() => console.log("Pressed")}
            color={theme.colors.background}
            icon={
              <Icon
                iconName="settings"
                iconType="MaterialIcons"
                size={24}
                color={theme.colors.inverseBackground}
              />
            }
          />
        </ThemeContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
