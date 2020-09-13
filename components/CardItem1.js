import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from "native-base";

import LalleHeader from "./LalleHeader";
const CardItem1 = (props) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header>
            <Text>{props.date}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{props.reading} {props.optionTaken}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default CardItem1;
