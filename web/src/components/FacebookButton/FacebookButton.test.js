import { render } from '@redwoodjs/testing/web'

import FacebookButton from './FacebookButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FacebookButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FacebookButton />)
    }).not.toThrow()
  })
})
