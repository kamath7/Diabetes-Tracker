import React , {useState, useEffect} from "react";
import { Dimensions } from "react-native";
import { Container, Content, Text } from "native-base";
import { LineChart } from "react-native-chart-kit";
import axios from 'axios';

import LalleHeader from "./LalleHeader";

const LalleGraph = (props) => {
  
  return (
    <Container>
      <LalleHeader />
      <Content>
        <Text style={{fontSize:15, paddingVertical: 13, fontWeight:'bold'}}>Diabetes reading over the past few months</Text>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "March", "April"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('screen').width}
          height={175}
         
          chartConfig={{
            backgroundColor: "#e26a00",
            color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            paddingRight: 5,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            marginHorizontal: 16,
          }}
        />
      </Content>
    </Container>
  );
};

export default LalleGraph;

