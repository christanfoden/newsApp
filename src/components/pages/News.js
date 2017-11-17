// import dependencies
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { Container, StyleProvider } from 'native-base';

class News extends Component {

  constructor() {
    super();
      this.state = {
        newsItems: []
      }
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
    return (
      <NewsItem data={this.state.newsItems} />
    );
  }
}

export default News;
