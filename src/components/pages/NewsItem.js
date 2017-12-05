import React, { Component } from 'react';
import { Text, View, Image, Alert, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';
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

    let img,
    element = articleData.better_featured_image;
    if (element != null) {
      img = element.source_url;
    }
    else {
      img = null;
    }

      return (
          <Card key={index}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-07-03/206606551280_14fc1110af6dd004fa61_132.png'}} />
                  <Body>
                    <TouchableOpacity
                      style={styles.titleStyle}
                      onPress={() => { Linking.openURL(articleData.link).catch(err => console.error('An error occured', err)); }}
                      >
                      <HTMLView
                        value={articleData.title.rendered}
                        style={styles.htmlTitleStyle}
                        // TextComponent={Text}
                      />
                    </TouchableOpacity>
                  </Body>
                </Left>
              </CardItem>
              <TouchableOpacity onPress={() => { Linking.openURL(articleData.link).catch(err => console.error('An error occured', err)); }}>
                <FitImage
                  source={{uri: `${img}`}}
                  style={styles.fitImageWithSize}
                />
              </TouchableOpacity>
              <CardItem>
                <TouchableOpacity onPress={() => { Linking.openURL(articleData.link).catch(err => console.error('An error occured', err)); }}>
                    <HTMLView
                      value={ContentSnippet(articleData.excerpt.rendered)}
                      // onLinkPress={() => { Linking.openURL(articleData.link).catch(err => console.error('An error occured', err)); }}
                    />
                </TouchableOpacity>
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
                    onPress={() => { Linking.openURL(articleData.link).catch(err => console.error('An error occured', err)); }}
                    style={{ padding: 10 }}
                    transparent
                    title="ok"
                    >
                      <Text style={{ color: 'blue' }}>
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
  htmlTitleStyle: {
    width: 275,
    height: 50,
    paddingTop: 5,
    color: 'blue'
  },
  titleStyle: {
    color: 'blue'
  },
  fitImage: {
    borderRadius: 50,
  },
  fitImageWithSize: {
    height: 100,
    width: 'auto'
  },
};

export default NewsItem;
