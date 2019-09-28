import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Select from './Select'

describe('Select test', () => {
  const mockItems = [{ name: 'val1', value: 'val1' }, { name: 'val2', value: 'val2' }]
  let mockValue = ''
  function mockHandleOnSelect(val) {
    mockValue = val
  }

  afterEach(cleanup)

  it('should not render option by default', () => {
    const { container } = render(<Select />)
    expect(container.querySelector('[data-testid="option-wrapper-tid"]')).toBeNull()
  })

  it('should render option when click on Select', () => {
    const { container, getByTestId } = render(<Select items={mockItems} />)
    expect(container.querySelector('[data-testid="options-wrapper-tid"]')).toBeNull()

    fireEvent.click(getByTestId('select-wrapper-tid'))
    expect(getByTestId('options-wrapper-tid')).not.toBeNull()
  })

  it('should callback value when select option', () => {
    const idx = 0
    const { getByTestId } = render(
      <Select items={mockItems} value={mockValue} onSelect={mockHandleOnSelect} />
    )
    expect(mockValue).toEqual('') // prev

    fireEvent.click(getByTestId('select-wrapper-tid'))
    fireEvent.click(getByTestId(`option-${idx}-tid`))
    expect(mockValue).toEqual(mockItems[idx].value)
  })

  it('should close option after selected value', () => {
    const { container, getByTestId } = render(
      <Select items={mockItems} value={mockValue} onSelect={mockHandleOnSelect} />
    )

    fireEvent.click(getByTestId('select-wrapper-tid'))
    expect(getByTestId('options-wrapper-tid')).not.toBeNull()

    fireEvent.click(getByTestId('option-0-tid'))
    expect(container.querySelector('[data-testid="options-wrapper-tid"]')).toBeNull()
  })
})
