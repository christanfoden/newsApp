import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import { Tabs } from './components/Nav'

class App extends Component {
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

  // renderTabs() {
  //   return <Tabs />;
  // }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Card>
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                Log Out
                </Button>
              </CardSection>
            </Card>
          </View>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
        <Tabs />
      </View>
    );
  }
}

export default App;
