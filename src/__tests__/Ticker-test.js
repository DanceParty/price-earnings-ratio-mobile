import React from 'react'
import { render } from 'react-native-testing-library'

import Ticker from '../screens/Ticker'

function createProps(props) {
  return {
    navigation: {
      navigate: jest.fn()
    },
    ...props,
  }
}

describe('Ticker - API Search', () => {
  test('searching for a valid company', () => {
    const props = createProps({})
    const { getByPlaceholder } = render(<Ticker {...props} />)
    expect(getByPlaceholder('Search by ticker...')).toBeTruthy();
    // TODO: figure out how to test this functionality
  })
})