import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content } from 'native-base';
import AppHeader from '../appHeader';


export default class Settings extends Component {
  render() {
    return (
        <Content>
          <AppHeader />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
              Settings Page
            </Text>
          </View>
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
