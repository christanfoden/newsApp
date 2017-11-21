import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'firebase';
import {Container, StyleProvider,  Header, Left, Right, Icon, Button, Body} from 'native-base';

// import Themes
import getTheme from './src/themes/components';
import OffkeyTheme from './src/themes/variables/OffkeyTheme';

// import components
import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import LoginForm from './src/components/LoginForm';
import { Spinner, Card, CardSection } from './src/components/common';

// import pages
import News from './src/components/pages/News';
import Events from './src/components/pages/Events';
import Settings from './src/components/pages/Settings';

import { Router, Scene } from 'react-native-router-flux';

export default class newsApp extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCTnf0S6ols6KG8-7VkR785E3GEzub-M00',
    authDomain: 'news-8436e.firebaseapp.com',
    databaseURL: 'https://news-8436e.firebaseio.com',
    projectId: 'news-8436e',
    storageBucket: 'news-8436e.appspot.com',
    messagingSenderId: '863933432148'
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  render() {
    switch (this.state.loggedIn) {
      case true:
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
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }
}

AppRegistry.registerComponent('newsApp', () => newsApp);
