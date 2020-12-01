import React from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import commonStyles from '../../common/commonStyles'

export default () => {
    const navigation = useNavigation()

    return (
        <View style={styles.footer}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchesList')}>
                <View>
                    <Text style={[styles.subtitle, { textAlign: 'center' }]}>Clique aqui e embarque nessa emoção!</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
    }
})

