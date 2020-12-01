import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Image, View } from 'react-native'

// Função que faz a animação ao iniciar o aplicativo
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    )
}

export default () => {
    return (
        <FadeInView style={styles.image}>
            <View>
                <Image source={require('../../../assets/imgs/rocket.png')} style={styles.imageSize}></Image>
            </View>
        </FadeInView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imageSize: {
        width: 390,
        height: 390
    },
})