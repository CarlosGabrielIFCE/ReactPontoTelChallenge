import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './config/routes';

export default props => (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
)