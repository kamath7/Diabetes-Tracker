import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Container, Content } from "native-base";
import axios from "axios";

import LalleHeader from "./LalleHeader";
import CardItem1 from "./CardItem1";

const CardList1 = () => {
  const [lalleData, setLalleData] = useState([]);
  useEffect(() => {
    // console.log("App started!");
    axios.get(`https://lalle-diabetes-tracker.herokuapp.com/records`).then((response) => setLalleData(response.data));
  }, []);
  return (
    <Container>
      <LalleHeader />
      <Content>
        {lalleData.map((data, i) => (
          <CardItem1
            key={data._id}
            date={data.readingDate}
            reading={data.reading}
            optionTaken={data.fastingOption}
          />
        ))}
      </Content>
    </Container>
  );
};

export default CardList1;
