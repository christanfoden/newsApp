// import dependencies
import React, { Component } from 'react';
import { Container, StyleProvider } from 'native-base';
import { Router, Scene, Stack } from 'react-native-router-flux';

// import Themes
import getTheme from './themes/components';
import OffkeyTheme from './themes/variables/OffkeyTheme';

// import components
import NewsItem from './components/NewsItem';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';

// import pages
import Events from './components/pages/Events';
import Settings from './components/pages/Events';


class App extends Component {

  constructor() {
    super();
      this.state = { newsItems: [] };
  }

  getData() {

    // return fetch('http://www.energylivenews.com/wp-json/wp/v2/posts?_embed')
    // return fetch('https://theenergyst.com/wp-json/wp/v2/posts?_embed')
    return fetch('http://www.offkey-ltd.com/news/wp-json/wp/v2/posts?_embed')
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
        {/* <Router>
          <Scene key="root">
            <Scene key="News" component={NewsItem} title='News' />
            <Scene key="Events" component={Events} title='Events' />
            <Scene key="Settings" component={Settings} title='Settings' />
          </Scene>
        </Router> */}
        <AppHeader/>
        <NewsItem data={this.state.newsItems} />
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

export default App;
