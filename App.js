/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { loadFontsFromUrl, createFontIcon } from './fontUtils';

export default class App extends Component<{}> {
  state;
  MyIcon;

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    await loadFontsFromUrl([{
      url: 'https://drive.google.com/uc?id=0B40lpLXSNXhwdUpPTXppX2lBakE',
      name: 'FontAwesome'
    }, {
      url: 'https://drive.google.com/uc?id=0B40lpLXSNXhwQ3ZsLXh6NGlMY3M',
      name: 'Indie Flower'
    // }, {
    //   url: 'https://drive.google.com/uc?id=0B40lpLXSNXhwV3U0WEFxa25iTE0',
    //   name: 'HelveticaNeue LT 55 Roman'
    }]);

    this.MyIcon = createFontIcon('FontAwesome');
    // await this.MyIcon.loadFont();
    this.setState({ loaded: true });
  }

  render() {
    return (
      this.state.loaded ? (
        <View style={styles.container}>
          <this.MyIcon name='coffee' size={48} />
          <Text style={{ fontFamily: 'Indie Flower', fontSize: 16 }}>
            This should render using Indie Flower font
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{ fontFamily: 'Indie Flower', fontSize: 16 }}>Loading fonts…</Text>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
