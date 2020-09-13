import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

import EntryForm from "../components/EntryForm";

const TabIcon = (props) => (
  <AntDesign name="form" size={24} color={props.focused ? "blue" : "grey"} />
);

export class FormScreen extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };
  render() {
    return <EntryForm />;
  }
}

export default FormScreen;
