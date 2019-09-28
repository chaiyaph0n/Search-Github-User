import React, { useCallback, useState } from 'react'
import { css, cx } from 'emotion'

import useClickOutside from '../../hooks/useClickOutside'

const wrapperStyle = css`
  min-width: 64px;
  text-align: center;
  position: relative;
`

const selectWrapper = css`
  background-color: white;
  border-width: 0;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0);
  padding: 4px 6px;
  font-size: 16px;
  width: 100%;
`

const activeSelectWrapper = css`
  border-radius: 3px 3px 0 0;
  box-shadow: none;
`

const optionsWrapperStyle = css`
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0);
  max-height: 320px;
  overflow: auto;
  position: absolute;
  padding: 4px 0px;
  width: 100%;
`

const optionStyle = css`
  cursor: pointer;
  :hover {
    background-color: #f7f9fa;
  }
`

function useSelect(init = false) {
  const [isOpen, setIsOpen] = useState(init)
  const handleSetIsOpen = open => () => {
    setIsOpen(open)
  }

  return [isOpen, handleSetIsOpen]
}

function Select({ items = [], value = '', onSelect }) {
  const [isOpen, handleSetIsOpen] = useSelect()
  const outsideRef = useClickOutside(handleSetIsOpen(false))
  const isItemsNotEmpty = !!items.length

  const _onSelect = useCallback(
    val => () => {
      handleSetIsOpen(false)()
      if (onSelect) {
        onSelect(val)
      }
    },
    [onSelect, handleSetIsOpen]
  )

  return (
    <div ref={outsideRef} data-testid="select-container-tid" className={wrapperStyle}>
      <div
        data-testid="select-wrapper-tid"
        className={cx(selectWrapper, { [activeSelectWrapper]: isOpen })}
        onClick={handleSetIsOpen(true)}
      >
        {value}
      </div>
      {isOpen && isItemsNotEmpty && (
        <div data-testid="options-wrapper-tid" className={optionsWrapperStyle}>
          {items.map(({ name, value }, idx) => (
            <div
              key={`${name}-${idx}`}
              data-testid={`option-${idx}-tid`}
              onClick={_onSelect(value)}
              className={optionStyle}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
