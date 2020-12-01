import 'react-native';
import React from 'react';
import Home from '../src/screens/Home'
import MockedNavigator from './components/MockedNavigator'

import renderer from 'react-test-renderer';

it('should render correctly', () => {
  const tree = renderer.create(<MockedNavigator component={Home} />).toJSON()
  expect(tree).toMatchSnapshot();
})