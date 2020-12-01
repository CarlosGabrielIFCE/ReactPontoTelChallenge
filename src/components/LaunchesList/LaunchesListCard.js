import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import commonStyles from '../../common/commonStyles';

export default props => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchDetails', { item: props.item })}>
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image source={{ uri: props.image }} style={{ width: 100, height: 100 }}></Image>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.subtitle}>{props.name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',    
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        fontFamily: commonStyles.fontFamily2,
        fontSize: 20
    },
    subtitle: {
        fontFamily: 'Roboto-Thin',
        fontSize: 15
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

