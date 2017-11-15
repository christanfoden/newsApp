import React, { Component } from 'react';
import { Container, StyleProvider } from 'native-base';
import getTheme from './themes/components';
import OffkeyTheme from './themes/variables/OffkeyTheme';
import NewsItem from './components/NewsItem';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';

class App extends Component {

  constructor() {
    super();
      this.state = { newsItems: [] };
  }

  getData() {

    return fetch('http://www.energylivenews.com/wp-json/wp/v2/posts?_embed')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ newsItems: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.newsItems);
    return (
      <StyleProvider  style={getTheme(OffkeyTheme)}>
      <Container>
        <AppHeader/>
        <NewsItem data={this.state.newsItems} />
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

export default App;
