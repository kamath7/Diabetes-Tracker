import React from "react";
import { View, Text } from "react-native";
import { Container, Content } from "native-base";

import LalleHeader from "./LalleHeader";
import CardItem1 from "./CardItem1";

const lalleData = [
  { date: "24, March 2020", reading: "180", optionTaken: "Without Fast" },
  { date: "20, April 2020", reading: "330", optionTaken: "With Fast" },
  { date: "29, January 2020", reading: "200", optionTaken: "Without Fast" },
];
const CardList1 = () => {
  return (
    <Container>
      <LalleHeader />
      <Content>
        {lalleData.map((data, i) => (
          <CardItem1
            key={i}
            date={data.date}
            reading={data.reading}
            optionTaken={data.optionTaken}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CardList1;
