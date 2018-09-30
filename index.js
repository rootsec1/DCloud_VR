import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import { VideoPano, Environment, NativeModules, staticAssetURL } from 'react-360';
const {VideoModule} = NativeModules;


export default class DCloud_VR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            D Cloud VR
          </Text>
        </View>
      </View>
    );
}

componentDidMount() {
  VideoModule.createPlayer('myplayer');
  // Play a specific video
  VideoModule.play('myplayer', {
    //source: {url: 'http://localhost:8080/ipfs/QmdU95FktSifTAvZHKuy2NwmCeeLkx6x9CCtqt35MxSFSM'}
    source: {url: 'http://localhost:6942?hash=QmdU95FktSifTAvZHKuy2NwmCeeLkx6x9CCtqt35MxSFSM'}, 
    stereo: '3DTB', // optionally, supply the format of the video
  });
  Environment.setBackgroundVideo('myplayer');
}
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('DCloud_VR', () => DCloud_VR);
