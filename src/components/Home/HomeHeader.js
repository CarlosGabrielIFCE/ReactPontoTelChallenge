import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import commonStyles from '../../commonStyles'

export default () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Space X App</Text>
            <Text style={styles.subtitle}>Imersão astronáutica!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontFamily: commonStyles.fontFamily,
        color: '#FFF'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
    }
})

