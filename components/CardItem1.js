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

const CardItem1 = (props) => {
  return (
    <Card>
      <CardItem header>
        <Text>{props.date}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            {props.reading} {props.optionTaken}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CardItem1;
