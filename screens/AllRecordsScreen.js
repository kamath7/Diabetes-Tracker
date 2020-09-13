import React, { Component } from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import CardList1 from "../components/CardList1";

const TabIcon = (props) => (
  <MaterialIcons
    name="store-mall-directory"
    size={24}
    color={props.focused ? "blue" : "grey"}
  />
);

export class AllRecordsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };
  render() {
    return <CardList1/>;
  }
}

export default AllRecordsScreen;
