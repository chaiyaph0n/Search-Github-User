import React, { useState } from 'react'
import { css } from 'emotion'

function SearchWithOptions({ optionList, value, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const isValueNotBlank = !!value
  const isOptionListNotEmpty = !!(optionList && Object.keys(optionList).length)

  const _onFocus = () => {
    setIsOpen(true)
  }

  const _onBlur = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <input
        data-testid="search-input-tid"
        value={value}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...props}
      />
      {isOpen && isValueNotBlank && isOptionListNotEmpty && (
        <div data-testid="option-list-wrapper-tid">options</div>
      )}
    </div>
  )
}

export default SearchWithOptions
