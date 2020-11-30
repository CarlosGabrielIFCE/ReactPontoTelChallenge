import React, { Component } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import commonStyles from '../commonStyles'

export default class LaunchDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
        this.state.item = props.route.params.item
    }

    render() {
        const { navigation } = this.props
        const { item } = this.state
        // let { item } = this.state
        // item = navigation.getParam('item')
        return (
            <SafeAreaView style={commonStyles.container}>
                <View style={styles.contentCard}>
                    <Image source={require('../../assets/imgs/astronaut.jpg')} style={styles.image} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>Subtitle</Text>
                    <Text style={styles.paragraph}>Assistir o vídeo do lançamento</Text>
                    <Text style={[styles.paragraph]}>Ler o Artigo sobre o lançamento</Text>
                    <Button title="Voltar" type="clear" titleStyle={{ fontFamily: commonStyles.fontFamily2, color: '#000'}} onPress={() => navigation.goBack()}/>
                </View>
            </SafeAreaView>
        )
    }
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
        width: 300,
        height: 300
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
