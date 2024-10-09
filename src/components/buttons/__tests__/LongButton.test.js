import React from "react";
import renderer from "react-test-renderer";
import ThemeContent from "../../../../resources/theme/theme";
import { THEME_DATA } from "../../../../resources/theme/testing_data/theme_data";
import Icon from "../../icon/Icon";
import LongButton from "../LongButton";

const theme = THEME_DATA;

describe("Default Long Button", () => {
  it("renders in light mode", () => {
    const tree = renderer
      .create(
        <ThemeContent>
          <LongButton
            text="Add"
            onPress={() => console.log("Pressed")}
            color={theme.colors.staticGrey}
            icon={
              <Icon
                iconName="add"
                iconType="MaterialIcons"
                size={24}
                color={theme.colors.staticBlack}
              />
            }
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
          <LongButton
            text="Add"
            onPress={() => console.log("Pressed")}
            color={theme.colors.staticGrey}
            icon={
              <Icon
                iconName="add"
                iconType="MaterialIcons"
                size={24}
                color={theme.colors.staticBlack}
              />
            }
          />
        </ThemeContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
