import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { CardSection, Input, Spinner, Button } from './common';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import AppHeader from './appHeader';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          // .catch(this.onLoginFail.bind(this));
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              this.setState({ error: 'Weak password', loading: false });
            } else if (errorCode === 'auth/invalid-email') {
              this.setState({ error: 'invalid-email', loading: false });
            } else if (errorCode === 'auth/email-already-in-use') {
              this.setState({ error: 'email already in use', loading: false });
            } else {
              this.setState({ error: 'Authentication Failed', loading: false });
            }
            console.log(error);
          });
      });
  }

  // onLoginFail() {
  //   this.setState({ error: 'Authentication Failed', loading: false });
  // }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        transparent
        bordered
        full
        // style={{ flex: 1 }}
        onPress={this.onButtonPress.bind(this)}
      >
        <Text style={styles.textStyle}>Log In</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <AppHeader />
        <Content>
          <CardItem style={styles.textStyle}>
            <Text header style={{ fontWeight: 'bold', fontSize: 20 }}>Version 1.07</Text>
            <Text style={{ color: 'grey', fontSize: 15, textAlign: 'center' }}>
              By entering an email and password, an account will automatically be set up.
              Your password must contain at least 5 characters.</Text>
          </CardItem>
          <Card>
            <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
            <CardItem header style={styles.textStyle}>
              <Text style={{ color: 'grey', fontSize: 15, textAlign: 'center' }}>
                "Somewhere, something incredible is waiting to be known."
              </Text>
              <Text />
              <Text
                style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 20
               }}
              >
                Carl Sagan
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'grey',
    margin: 20
    // fontSize: 20
  }
};

export default LoginForm;
