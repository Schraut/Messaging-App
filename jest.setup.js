jest.mock("expo-font", () => ({
  useFonts: jest.fn(() => [true]),
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { View } = require("react-native");

  // Mocking a generic icon component
  const MockIcon = jest
    .fn()
    .mockImplementation(({ children }) =>
      React.createElement(View, {}, children)
    );

  return {
    MaterialIcons: MockIcon,
    MaterialCommunityIcons: MockIcon,
    Ionicons: MockIcon,
    FontAwesome5: MockIcon,
    FontAwesome: MockIcon,
    Entypo: MockIcon,
    Octicons: MockIcon,
    Feather: MockIcon,
    AntDesign: MockIcon,
  };
});
