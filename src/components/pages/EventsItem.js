import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
import { GetImage, GetVideo } from '../../helpers/helper';

class EventsItem extends Component {

  render() {
    let news = this
    .props
    .data
    .map(function(articleData, index){

      return (
          <Card key={index}>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/641945177939144708/IrqwXEgT.jpg'}} /> */}
                  <Thumbnail source={{uri: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-07-03/206606551280_14fc1110af6dd004fa61_132.png'}} />
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
              <CardItem>
                  <FitImage
                    // source={require('../../img/Artboard11.png')}
                    source={{ uri: GetImage(articleData.content.rendered) }}
                    style={styles.fitImage}
                  />
                  {/* <Text>
                    {articleData._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                  </Text> */}
              </CardItem>
              <CardItem content>
                {/* <HTMLView
                  value={articleData.content.rendered}
                  // style={{ flex: 1 }}
                /> */}
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
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
};

export default EventsItem;
