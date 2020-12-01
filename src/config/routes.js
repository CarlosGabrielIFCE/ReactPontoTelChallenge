import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import LaunchDetails from '../screens/LaunchDetails'
import LaunchesListV2 from '../screens/LaunchesListV2'
import LaunchItemWebView from '../screens/LaunchItemWebView'
import LaunchItemYoutubeVideo from '../screens/LaunchItemYoutubeVideo'

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="LaunchesListV2" component={LaunchesListV2}></Stack.Screen>
        <Stack.Screen name="LaunchDetails" component={LaunchDetails}></Stack.Screen>
        <Stack.Screen name="LaunchItemWebView" component={LaunchItemWebView}></Stack.Screen>
        <Stack.Screen name="LaunchItemYoutubeVideo" component={LaunchItemYoutubeVideo}></Stack.Screen>
    </Stack.Navigator>
)