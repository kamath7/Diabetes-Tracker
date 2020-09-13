import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FormScreen from "../screens/FormScreen";
import AllRecordsScreen from "../screens/AllRecordsScreen";
import GraphScreen from "../screens/GraphScreen";

const BottomTabNavigator = createBottomTabNavigator({
  Form: FormScreen,
  Graph: GraphScreen,
  AllRecords: AllRecordsScreen,
});

export default BottomTabNavigator;
