import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import LaunchDetails from '../screens/LaunchDetails'
import LaunchesList from '../screens/LaunchesList'
import LaunchItemWebView from '../screens/LaunchItemWebView'
import LaunchItemYoutubeVideo from '../screens/LaunchItemYoutubeVideo'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="LaunchesList" component={LaunchesList}></Stack.Screen>
        <Stack.Screen name="LaunchDetails" component={LaunchDetails}></Stack.Screen>
        <Stack.Screen name="LaunchItemWebView" component={LaunchItemWebView}></Stack.Screen>
        <Stack.Screen name="LaunchItemYoutubeVideo" component={LaunchItemYoutubeVideo}></Stack.Screen>
    </Stack.Navigator>
)