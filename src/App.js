import React, { Component } from 'react';
import { View, Text } from 'react-native';
import XMLParser from 'react-xml-parser';
import axios from 'axios';

class App extends Component {
  state = { news: [] };


  componentWillMount() {
    axios.get({
    let text = response;
      url: 'https://www.edie.net/news/rss0.xml',
      method: 'get',
      responseType: 'text'
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  myXmlParser() {
    const xml = new XMLParser().parseFromString(text);
        console.log(xml);
    console.log(xml.getElementsByTagName('title'));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

export default App;
