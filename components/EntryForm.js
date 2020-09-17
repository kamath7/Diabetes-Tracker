import React, { useState } from "react";
import {Alert} from 'react-native';
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
import axios from 'axios';
import { sendGridEmail } from "react-native-sendgrid";

import LalleHeader from './LalleHeader';
const EntryForm = () => {
  const [diabetesReading, setDiabetesReading] = useState("");
  const [fastingMechanism, setFastingMechanism] = useState("With Fast");
  const [dateRecord, setDateRecord] = useState(new Date());

  const SENDGRIDAPIKEY = process.env.SENDGRIDAPIKEY;
  const FROMEMAIL = "drkams96@gmail.com";
  const TOMEMAIL = "adithyakamath96@gmail.com";
  const SUBJECT = "New Diabetes Record";

  const handleSubmit = () => {
    const message = `A new record has been added. The diabetes reading is at ${diabetesReading}. It was done on ${dateRecord} and was done on '${fastingMechanism}'`;
    axios.post(`https://lalle-diabetes-tracker.herokuapp.com/records`,{
      reading: diabetesReading,
      readingDate: dateRecord,
      fastingOption: fastingMechanism
    },{
      headers:{
        'content-type':'application/json'
      }
    }).then((response)=>{
      console.log(response);
      Alert.alert('Success','Record Added',[{text:'Okay',onPress:()=>{console.log('Done!')}}])
    }).catch((err)=>{
      console.log(err);
      Alert.alert('Error','Something went wrong. Please enter again',[{text:'Okay',onPress:()=>{console.log('Done!')}}])
    })
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
      <LalleHeader/>
      <Content>
        <Form style={{ paddingTop: 20 }}>
          <Item floatingLabel style={{ paddingBottom: 30 }}>
            <Label>Diabetes Reading</Label>
            <Input
              value={diabetesReading}
              onChangeText={(val) => setDiabetesReading(val)}
            />
          </Item>

          <Item picker style={{ paddingBottom: 30, alignItems: "stretch" }}>
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
          <Item picker style={{ paddingBottom: 30, alignItems: "stretch" }}>
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
};

export default EntryForm;
