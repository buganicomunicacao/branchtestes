import { render } from '@testing-library/react'

import Customers from '../Customers'
/* eslint-disable no-undef */
describe('test integration Customers', () => {
  it('should find text Clientes in ui ', () => {
    const { container } = render(<Customers/>)

    expect(container.innerHTML).toContain('Gerenciamento de Clientes')
  })
})
