import React from "react";
import { View, Text } from "react-native";
import TestComponent from "../../components/test_component/TestComponent";

const TestScreen = () => {
  return (
    <View>
      <Text>Test Screen</Text>
      <TestComponent />
    </View>
  );
};

export default TestScreen;
