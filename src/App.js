import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import parseString from 'react-native-xml2js';

class App extends Component {
  state = { newsItems: [] };

  componentWillMount() {
    axios.get('http://www.energylivenews.com/feed/')
      .then(response => this.setState({ newsItems: response.data }));
  }

  render() {
    console.log(this.state.newsItems);
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
