import React, { Component } from 'react';
import { Image, Stylesheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {

  render() {
    return (
      <Footer>
          <FooterTab>
            <Button vertical active onPress={Actions.News}>
              <Icon name="book" />
              <Text>News</Text>
            </Button>
            <Button vertical onPress={Actions.Events}>
              <Icon name="camera" />
              <Text>Events</Text>
            </Button>
            <Button vertical onPress={Actions.Settings}>
              <Icon name="person" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

module.export = AppFooter;
