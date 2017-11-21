import React, { Component } from 'react';
import { Text, View, Image, Alert, Linking } from 'react-native';
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
import FitImage from 'react-native-fit-image';

import AppHeader from '../appHeader';
import { ContentSnippet, GetImage } from '../../helpers/helper';

class NewsItem extends Component {

  render() {
    console.log(this.state);
    let news = this
    .props
    .data
    .map(function(articleData, index){

      return (
          <Card key={index}>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/641945177939144708/IrqwXEgT.jpg'}} /> */}
                  <Thumbnail source={{ uri: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-07-03/206606551280_14fc1110af6dd004fa61_132.png'}} />
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
                  <FitImage
                    source={{uri: GetImage(articleData.content.rendered)}}
                    style={styles.fitImage}
                  />
                  <Text>
                    {articleData.featured_media}
                  </Text>
                  {/* <Text>
                    {articleData.better_featured_image.id}
                  </Text> */}
                  {/* <Image
                    source={articleData.better_featured_image.source_url}
                    style={{ width: 50, height: 50 }}
                  /> */}
              </CardItem>
              <CardItem content>
                <HTMLView
                  value={ContentSnippet(articleData.excerpt.rendered)}
                  // onPress={this._onPressArticle}
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
                </Body> */}
                <Right>
                  <Button
                    // onPress={() => {Alert.alert('You tapped an article 1')}}
                    onPress={() => {Linking.openURL('https://www.futurism.com').catch(err => console.error('An error occured', err));}}
                    style={{ padding: 10 }}
                    transparent
                    title="ok"
                    >
                      <Text>
                        Read More ...
                      </Text>
                    </Button>
                </Right>
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
  },
  fitImage: {
    borderRadius: 50,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
};

export default NewsItem;
