import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Container, StyleProvider,  Header, Left, Right, Icon, Button, Body} from 'native-base';

// import Themes
import getTheme from './src/themes/components';
import OffkeyTheme from './src/themes/variables/OffkeyTheme';

// import components
import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';

// import pages
import News from './src/components/pages/News';
import Events from './src/components/pages/Events';
import Settings from './src/components/pages/Settings';

import { Router, Scene } from 'react-native-router-flux';

export default class newsApp extends Component {
  render() {
    return (
      <StyleProvider  style={getTheme(OffkeyTheme)}>
        <Container>
          {/* <AppHeader/> */}
          {/* <News/> */}
          <Router>
            <Scene key="root">
              <Scene key="news" component={News} title="News" hideNavBar={true}/>
              <Scene key="events" component={Events} title="Events" hideNavBar={true}/>
              <Scene key="settings" component={Settings} title="Settings" hideNavBar={true}/>
            </Scene>
          </Router>
          <AppFooter/>
        </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('newsApp', () => newsApp);
