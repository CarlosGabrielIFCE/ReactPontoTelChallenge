import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent } from '@testing-library/react-native'

import Routes from '../src/config/routes'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('Testando a Navegação do React', () => {
    test('Abra a tela inicial e verifique se o Header está presente', async () => {
        const component = (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )

        const { findByText } = render(component)

        const header = await findByText('Space X App')

        expect(header).toBeTruthy()
    })

    test('Clique no texto de abrir a página e navegue para a lista de launches', async () => {
        const component = (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )

        const { findByText } = render(component)

        const toClick = await findByText('Clique aqui e embarque nessa emoção!')

        fireEvent(toClick, 'press')
        const newHeader = await findByText('Lançamentos')

        expect(newHeader).toBeTruthy()
    })
})