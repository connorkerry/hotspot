import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdd59',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: "700",
    color: '#ffffff',
    margin: 10,
  },
});