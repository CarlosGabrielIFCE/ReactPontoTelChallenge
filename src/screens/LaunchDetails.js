import React from 'react'
import { SafeAreaView } from 'react-native'

import commonStyles from '../common/commonStyles'

import LaunchDetailCard from '../components/LaunchDetails/LaunchDetailCard'

export default props => {
    const { item } = props.route.params
    return (
        <SafeAreaView style={commonStyles.container}>
            <LaunchDetailCard item={item} />
        </SafeAreaView>
    )
}