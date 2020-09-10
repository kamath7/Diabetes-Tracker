import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Body,
  Right,
  Title,
  Text,
  DatePicker,
  Picker,
  Button,
  Icon,
} from "native-base";

import { sendGridEmail } from "react-native-sendgrid";


export default function App() {
  const [diabetesReading, setDiabetesReading] = useState("");
  const [fastingMechanism, setFastingMechanism] = useState("With Fast");
  const [dateRecord, setDateRecord] = useState(new Date());

  const SENDGRIDAPIKEY = process.env.EMAIL_KEY;
  const FROMEMAIL = "doctorkams@gmail.com";
  const TOMEMAIL = "godadi.vk@gmail.com";
  const SUBJECT = "New Diabetes Record";

  const handleSubmit = () => {
    const message = `A new record has been added. The diabetes reading is at ${diabetesReading}. It was done on ${dateRecord} and was done on '${fastingMechanism}'`;
    const sendRequest = sendGridEmail(
      SENDGRIDAPIKEY,
      TOMEMAIL,
      FROMEMAIL,
      SUBJECT,
      message
    );
    sendRequest
      .then((response) => {
        console.log(`Message success. ${response}`);
      })
      .catch((err) => {
        console.log(`Error occured. ${err}`);
      });
  };
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Diabetes Tracker</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form style={{ paddingTop: 20 }}>
          <Item floatingLabel style={{paddingBottom:30}}>
            <Label>Diabetes Reading</Label>
            <Input
              value={diabetesReading}
              onChangeText={(val) => setDiabetesReading(val)}
            />
          </Item>

          <Item picker style={{paddingBottom:30, alignItems:'stretch'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Fasting Mechanism"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={fastingMechanism}
              onValueChange={(val) => setFastingMechanism(val)}
            >
              <Picker.Item label="With Fast" value="With Fast" />
              <Picker.Item label="Without Fast" value="Without Fast" />
            </Picker>
          </Item>
          <Item picker style={{paddingBottom:30, alignItems:'stretch'}}>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2020, 1, 1)}
              locale={"en"}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              disabled={false}
              onDateChange={(val) => setDateRecord(val)}
            />
          </Item>
          <Button
            full
            info
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
