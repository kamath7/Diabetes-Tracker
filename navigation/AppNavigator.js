import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import BottomTabNavigator from "./BottomTabNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigator,
  })
);
