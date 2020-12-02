import React from 'react';
import { act } from 'react-test-renderer'
import { render } from 'react-native-testing-library'

import MockedNavigator from './mocks/mockedNavigator'
import Home from '../src/screens/Home'

it('renders correctly', async () => {
    const result = render(<MockedNavigator component={Home} />)
    await act(async () => { expect(result).toMatchSnapshot() })
})