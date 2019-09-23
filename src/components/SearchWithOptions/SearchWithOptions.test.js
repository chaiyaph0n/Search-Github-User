import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'

import SearchWithOptions from './SearchWithOptions'

describe('App - test', () => {
  let mockValue = ''
  const mockOnChange = e => {
    mockValue = e.target.value
  }
  const mockOptionList = { items: [1, 2, 3] }

  afterEach(() => {
    cleanup()
    mockValue = ''
  })

  it('should render input for search', () => {
    const { getByTestId } = render(<SearchWithOptions />)
    expect(getByTestId('search-input-tid')).not.toBeNull()
  })

  it('can passing props to search input', () => {
    const placeholderText = "Type GitHub's username for search"
    const { getByPlaceholderText } = render(<SearchWithOptions placeholder={placeholderText} />)
    expect(getByPlaceholderText(placeholderText)).not.toBeNull()
  })

  it('should not render optionList, when option list is empty', () => {
    const { container, getByTestId } = render(<SearchWithOptions optionList={{}} />)
    fireEvent.focus(getByTestId('search-input-tid'))
    expect(container.querySelector('[data-testid="option-list-wrapper-tid"]')).toBeNull()
  })

  it('should not render optionList, when option list is not empty, but search field is blank', () => {
    mockValue = 'dan'
    const { container, getByTestId, rerender } = render(
      <SearchWithOptions value="dan" onChange={mockOnChange} optionList={mockOptionList} />
    )
    fireEvent.focus(getByTestId('search-input-tid'))
    expect(getByTestId('option-list-wrapper-tid')).not.toBeNull()

    rerender(<SearchWithOptions value="" onChange={mockOnChange} optionList={mockOptionList} />)
    fireEvent.focus(getByTestId('search-input-tid'))
    expect(container.querySelector('[data-testid="option-list-wrapper-tid"]')).toBeNull()
  })

  it('should render option when focus input and option list is not empty', () => {
    const { container, getByTestId } = render(
      <SearchWithOptions value="dan" onChange={mockOnChange} optionList={mockOptionList} />
    )
    expect(container.querySelector('[data-testid="option-list-wrapper-tid"]')).toBeNull()

    fireEvent.focus(getByTestId('search-input-tid'))
    expect(getByTestId('option-list-wrapper-tid')).not.toBeNull()
  })

  it('should not render option list when focus out', () => {
    const { container, getByTestId, rerender } = render(
      <SearchWithOptions value={mockValue} onChange={mockOnChange} optionList={{}} />
    )
    expect(container.querySelector('[data-testid="option-list-wrapper-tid"]')).toBeNull()
    fireEvent.change(getByTestId('search-input-tid'), { target: { value: 'dan' } })

    rerender(
      <SearchWithOptions
        value={mockValue}
        onChange={mockOnChange}
        optionList={{ items: [1, 2, 3] }}
      />
    )
    fireEvent.focus(getByTestId('search-input-tid'))
    expect(getByTestId('option-list-wrapper-tid')).not.toBeNull()

    fireEvent.blur(getByTestId('search-input-tid'))
    expect(container.querySelector('[data-testid="option-list-wrapper-tid"]')).toBeNull()
  })

  //
})
