import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Header, Body } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
          <Body>
            <Image source={require('../img/Artboard11.png')} style={{ width: 150, height: 60 }} />
          </Body>
        </Header>
    );
  }
}

module.export = AppHeader;
