import React, { Component } from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import LalleGraph from '../components/LalleGraph';

const TabIcon = (props) => (
  <Entypo name="line-graph" size={24} color={props.focused ? "blue" : "grey"} />
);

export class GraphScreen extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    return (
      <LalleGraph/>
    );
  }
}

export default GraphScreen;
