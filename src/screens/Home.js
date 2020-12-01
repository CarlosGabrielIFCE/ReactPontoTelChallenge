import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'

import commonStyles from '../common/commonStyles'

import Header from '../components/Home/HomeHeader'
import FadeInViewImage from '../components/Home/HomeFadeInView'
import Footer from '../components/Home/HomeFooter'

export default () => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Header />
            <View style={styles.content}>
                <FadeInViewImage />
                <Footer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 7,
    },
})