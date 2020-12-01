import React from 'react';
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import YouTube from 'react-native-youtube'

import commonStyles from '../common/commonStyles'

export default props => {
    const { item } = props.route.params
    const apiKey = 'AIzaSyDHaGJgU5ReQp5k5uyC3PRm3V-_T5-98kE'
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: commonStyles.container.backgroundColor }}>

            <YouTube
                apiKey={apiKey}
                videoId={item.links.youtube_id} // The YouTube video ID
                play={false} // control playback of video with true/false
                fullscreen={false} // control whether the video should play in fullscreen or inline
                loop={false} // control whether the video should loop when ended
                style={{ alignSelf: 'stretch', height: 400 }}
            />

            <Button title='Voltar' buttonStyle={{ backgroundColor: '#FFF' }} titleStyle={{ color: commonStyles.container.backgroundColor, fontFamily: commonStyles.fontFamily2 }} onPress={() => props.navigation.goBack()} />
        </SafeAreaView>
    );
}