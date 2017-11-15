import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import HTMLView from 'react-native-htmlview';

class NewsItem extends Component {

  render() {

    let news = this.props.data.map(function(articleData, index){

      return (
          <Card>
              <CardItem>
                <Body>
                  <Text>
                     <HTMLView value=
                       {articleData.title.rendered} style={{ width: 300, height: 30 }}
                     />
                  </Text>
                </Body>
              </CardItem>
            </Card>
      );
    });

    return (
      <Content>
        {news}
      </Content>
    );
  }
}

const styles = {
  textStyle: {
    width: 200,
    height: 20
  }
};

export default NewsItem;
