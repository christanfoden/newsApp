import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import firebase from 'firebase';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  // Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import AppHeader from '../appHeader';

import { Spinner, CardSection, Button } from '../common';


export default class Settings extends Component {
  render() {
    return (
        <Container>
          <AppHeader />
          <Content>
              <Card>
                <CardItem><Text style={styles.textHeaderStyle}>About</Text></CardItem>
                <CardItem style={styles.cardItemStyle}>
                  <Text style={styles.textStyle}>
                    You are most likely wondering what the bloody hell is the purpose of this application?
                  </Text>
                  <Text></Text>
                  <Text style={styles.textStyle}>
                    The purpose of this application is to turn a wordpress website into a fully native application.
                    Currently you can browse the top 10 stories from a wordpress site, log in and out using an authentication database and receive notifications.
                  </Text>
                  <Text></Text>
                  <Text style={styles.textStyle}>
                    On the roadmap is
                      <Text> 'development for android',</Text>
                      <Text> 'Event sign up forms',</Text>
                      <Text> 'category pages',</Text>
                      <Text> 'story liking',</Text>
                      <Text> 'social sharing',</Text>
                      <Text> 'story categories',</Text>
                      <Text> 'category interest',</Text>
                  </Text>
                </CardItem>
                <CardItem style={styles.cardItemStyle}>
                  <Button
                    onPress={() => firebase.auth().signOut()}
                    bordered
                    full
                    >
                    <Text>
                      Log Out
                    </Text>
                  </Button>
                  <Text></Text>
                  <Button
                    onPress={() => {
                      Linking.openURL('mailto:christan@offkey-ltd.com')
                      .catch(err => console.error('An error occured', err));
                    }}
                    bordered full
                    >
                    <Text>
                      Email Update Ideas
                    </Text>
                  </Button>
                </CardItem>
                <CardItem style={{ margin: 20 }}>

                </CardItem>
              </Card>
          </Content>
        </Container>

    );
  }
}

const styles = {
    cardItemStyle: {
      flexDirection: 'column',
      // alignItems: 'center',
      // alignSelf: 'center',
      margin: 5,
    },
    textStyle: {
      color: 'grey',
      fontSize: 15,
      textAlign: 'center'
    },
    textHeaderStyle: {
      fontSize: 20,
      textAlign: 'left',
      color: 'grey',
      fontWeight: 'bold'
    }
};

module.export = Settings;
