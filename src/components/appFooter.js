import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button vertical>
              <Icon active name="book" />
              <Text>News</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon name="person" />
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

module.export = AppFooter;
