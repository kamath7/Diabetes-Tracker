import React, { Component } from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const TabIcon = (props) => (
  <Entypo name="line-graph" size={24} color={props.focused ? "blue" : "grey"} />
);

export class GraphScreen extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    return (
      <View>
        <Text> Graph Screen </Text>
      </View>
    );
  }
}

export default GraphScreen;
