import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const VIMEO_ID = '179859217';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: {width: undefined, height: undefined, duration: undefined},
      thumbnailUrl: undefined,
      videoUrl: undefined,
      opacity: 0,
    };
  }

  // componentDidMount() {
  //   //global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
  //   global
  //     .fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
  //     .then(res => res.json())
  //     .then(res =>
  //       this.setState({
  //         thumbnailUrl: res.video.thumbs['640'],
  //         videoUrl:
  //           res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
  //         video: res.video,
  //       }),
  //     );
  // }

  onLoadStart = () => {
    this.setState({opacity: 1});
  };

  onLoad = () => {
    this.setState({opacity: 0});
  };

  onBuffer = ({isBuffering}) => {
    this.setState({opacity: isBuffering ? 1 : 0});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 22, marginTop: 22}}>
          React Native Video Player
        </Text>

        {/* <VideoPlayer
          endWithThumbnail
          thumbnail={{
            uri: 'http://web.art-cloud.com/files/course/2017/04-26/61d4fc348c8db_L.jpg',
          }}
          video={{uri: 'http://web.art-cloud.com/lesson/2160/media'}}
          videoWidth={280}
          videoHeight={160}
          ref={r => (this.player = r)}
        /> */}

        <VideoPlayer
          video={{
            uri: 'http://web.art-cloud.com/lesson/2160/media',
          }}
          videoWidth={1600}
          videoHeight={900}
          showDuration={true}
          onBuffer={this.onBuffer}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoad}
          thumbnail={{
            uri: 'http://web.art-cloud.com/files/course/2017/04-26/61d4fc348c8db_L.jpg',
          }}
        />
        <ActivityIndicator
          animating
          size="large"
          color="#000FFF"
          style={[styles.activityIndicator, {opacity: this.state.opacity}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    top: 70,
    left: 70,
    right: 70,
    height: 50,
  }
});
