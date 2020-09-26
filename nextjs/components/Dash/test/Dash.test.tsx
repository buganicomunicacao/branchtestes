import { render } from '@testing-library/react'

import Dash from '../Dash'
/* eslint-disable no-undef */
describe('test integration Dash', () => {
  it('should find menu drawer ', () => {
    const { container } = render(<Dash/>)

    expect(container.innerHTML).toContain('Clientes')
  })
})
