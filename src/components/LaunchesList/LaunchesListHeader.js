import React, { useMemo } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import commonStyles from '../../common/commonStyles'

// Date import
import moment from 'moment'
import 'moment/locale/pt-br'

export default () => {
    const today = useMemo(() => moment().locale('pt-br').format('ddd, D [de] MMMM'))
    
    return (
        <View style={styles.header}>
            <View style={styles.imageHeader}>
                <Image source={require('../../../assets/imgs/rocket.png')} style={{ height: 150, width: 150 }}></Image>
            </View>
            <View style={styles.textHeader}>
                <Text style={styles.text}>Lançamentos</Text>
                <Text style={styles.text}>Hoje, {today}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: commonStyles.container.backgroundColor
    },
    imageHeader: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        flex: 5,
        justifyContent: 'center',
        paddingRight: 20,
        paddingBottom: 20
    },
    text: {
        textAlign: 'right',
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 15,
        alignItems: 'flex-end'
    }    
})

