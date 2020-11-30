import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../commonStyles';

export default props => {
    const navigation = useNavigation();
    
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchDetails', {item: props.item}) }>
            <View style={styles.item}>
                <Image source={{ uri: props.image }} style={{ width: 100, height: 100 }}></Image>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.subtitle}>{props.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({ 
    item: {
        flex: 1,
        width: 200,
        height: 200,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center',
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

