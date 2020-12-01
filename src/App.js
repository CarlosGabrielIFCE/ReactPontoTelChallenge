import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

import Routes from './config/routes'

export default () => (
    <Provider store={store}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </Provider>
)