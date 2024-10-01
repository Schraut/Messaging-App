import React from "react";
import renderer from "react-test-renderer";
import TestScreen from "../TestScreen";

test("renders correctly", () => {
  const tree = renderer.create(<TestScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
