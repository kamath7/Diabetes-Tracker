import React from "react";
import { View, Text } from "react-native";
import {Header,Left,Body,Title,Right} from 'native-base';
const LalleHeader = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Diabetes Tracker</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default LalleHeader;
