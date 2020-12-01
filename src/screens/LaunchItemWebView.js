import React from 'react';
import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import { Button } from 'react-native-elements'

import commonStyles from '../common/commonStyles'

export default props => {
  const { item } = props.route.params

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: commonStyles.container.backgroundColor }}>
        <WebView 
          source={{ uri: item.links.article }}
          style={{ marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 50,  borderRadius: 5 }}
        />
        <Button title='Voltar' buttonStyle={{ backgroundColor: '#FFF'}} titleStyle={{ color: commonStyles.container.backgroundColor, fontFamily: commonStyles.fontFamily2}} onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
}