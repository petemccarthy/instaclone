import { render } from '@redwoodjs/testing/web'

import MenuToggle from './MenuToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MenuToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuToggle />)
    }).not.toThrow()
  })
})
