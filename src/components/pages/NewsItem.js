import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import TimeAgo from 'react-native-timeago';

import AppHeader from '../appHeader';
import { ContentSnippet } from '../../helpers/helper';

class NewsItem extends Component {

  render() {
    let news = this
    .props
    .data
    .map(function(articleData, index){

      return (
          <Card>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/641945177939144708/IrqwXEgT.jpg'}} /> */}
                  <Thumbnail source={{uri: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-07-03/206606551280_14fc1110af6dd004fa61_132.png'}} />
                  <Body>
                    <Text>
                      <HTMLView
                        value={articleData.title.rendered}
                        style={styles.titleStyle}
                      />
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                  <Image
                    // source={require('../../img/Artboard11.png')}
                    source={require('../../img/Artboard11.png')}
                    style={{ width: 150, height: 60 }}
                  />
                  {/* <Text>Id: {articleData._embedded.author.id}</Text> */}
              </CardItem>
              <CardItem content>
                <HTMLView
                  value={ContentSnippet(articleData.excerpt.rendered)}
                  // style={{ flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="time" />
                    <Text> <TimeAgo time={articleData.date} />
                    </Text>
                  </Button>
                </Left>
                {/* <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right> */}
            </CardItem>
            </Card>
      );
    });

    return (
      <Container>
        <AppHeader />
        <Content>{news}</Content>
      </Container>
    );
  }
}

const styles = {
  textStyle: {
    width: 200,
    height: 20
  },
  titleStyle: {
    width: 275,
    height: 50,
    paddingTop: 5
  }
};

export default NewsItem;
