import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import LaunchesList from '../screens/LaunchesList'
import LaunchDetails from '../screens/LaunchDetails'

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="LaunchesList" component={LaunchesList}></Stack.Screen>
        <Stack.Screen name="LaunchDetails" component={LaunchDetails}></Stack.Screen>
    </Stack.Navigator>
)