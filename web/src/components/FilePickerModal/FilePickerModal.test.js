import { render } from '@redwoodjs/testing/web'

import FilePickerModal from './FilePickerModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FilePickerModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FilePickerModal />)
    }).not.toThrow()
  })
})
