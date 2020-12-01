import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import commonStyles from '../../common/commonStyles'

export default props => {
    const navigation = useNavigation()

    return (
        <View style={styles.contentCard}>
            <Image source={{ uri: props.item.links.patch.small }} style={styles.image} />
            <Text style={styles.title}>{props.item.name}</Text>
            <Text style={styles.subtitle}>Subtitle</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchItemYoutubeVideo', { item: props.item })}>
                <Text style={[styles.paragraph]}>Assistir a um vídeo sobre o lançamento</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchItemWebView', { item: props.item })}>
                <Text style={[styles.paragraph]}>Ler o Artigo sobre o lançamento</Text>
            </TouchableWithoutFeedback>
            <Button title="Voltar" type="clear" titleStyle={{ fontFamily: commonStyles.fontFamily2, color: '#000' }} onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    contentCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    image: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 50,
        fontFamily: commonStyles.fontFamily2
    },
    subtitle: {
        fontSize: 25,
        fontFamily: commonStyles.fontFamily2,
        paddingBottom: 30
    },
    paragraph: {
        fontSize: 16,
        fontFamily: commonStyles.fontFamily2,
        paddingBottom: 20
    }
})
