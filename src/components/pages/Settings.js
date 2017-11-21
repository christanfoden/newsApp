import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import AppHeader from '../appHeader';

import { Spinner, CardSection } from '../common';


export default class Settings extends Component {
  render() {
    return (
        <Content>
          <AppHeader />
            <Card>
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>
                  Settings Page
                </Text>
                <Button
                  onPress={() => firebase.auth().signOut()}
                  bordered full
                  >
                  <Text>
                    Log Out
                  </Text>
                </Button>
              </View>
            </Card>
        </Content>
    );
  }
}

const styles = {
    textStyle: {
      color: 'grey',
    },
    viewStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 500
    }
};

module.export = Settings;
