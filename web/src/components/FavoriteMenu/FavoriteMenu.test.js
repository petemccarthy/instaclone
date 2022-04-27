import { render } from '@redwoodjs/testing/web'

import FavoriteMenu from './FavoriteMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FavoriteMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FavoriteMenu />)
    }).not.toThrow()
  })
})
