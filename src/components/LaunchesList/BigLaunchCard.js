import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../commonStyles';

export default props => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchDetails')}>
            <View style={styles.item}>
                <Image source={require('../../../assets/imgs/astronaut.jpg')} style={{ width: 100, height: 100 }}></Image>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.subtitle}>{props.name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 150,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#e6e6e6",
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
    }
})

