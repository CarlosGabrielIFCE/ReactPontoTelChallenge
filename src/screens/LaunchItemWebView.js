import React, { Component } from 'react';
import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview';

import commonStyles from '../commonStyles'

export default class LaunchItemWebView extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: commonStyles.container.backgroundColor}}>
        <WebView
          source={{ uri: 'https://alexb72.medium.com/how-to-add-pagination-to-a-react-native-flatlist-ce2425d02f1a' }}
          style={{ marginTop: 20 }}
        />
      </SafeAreaView>
    );
  }
}