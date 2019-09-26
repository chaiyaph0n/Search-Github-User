import React, { useState } from 'react'
import { css } from 'emotion'

import UserList from './UserList'
import useClickOutside from '../../hooks/useClickOutside'

const wrapperStyle = css`
  width: 80%;
  position: relative;
  input {
    border-width: 0;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0);
    padding: 4px 6px;
    font-size: 16px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`

const optionStyle = css`
  position: absolute;
  background-color: #fff;
  max-height: 320px;
  overflow: auto;
  width: 100%;
  border-radius: 0 0 4px 4px;
`

function SearchWithOptions({ optionList, value, onSelectUser, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const outsideRef = useClickOutside(() => setIsOpen(false))
  const isValueNotBlank = !!value
  const isOptionListNotEmpty = !!(optionList && Object.keys(optionList).length)

  function _onFocus() {
    setIsOpen(true)
  }

  function _onSelectUser(userDetail) {
    if (onSelectUser !== undefined) {
      onSelectUser(userDetail)
    }
    setIsOpen(false)
  }

  return (
    <div
      ref={outsideRef}
      data-testid="search-input-with-option-wrapper-tid"
      className={wrapperStyle}
    >
      <input data-testid="search-input-tid" value={value} onFocus={_onFocus} {...props} />
      {isOpen && isValueNotBlank && isOptionListNotEmpty && (
        <div className={optionStyle} data-testid="option-list-wrapper-tid">
          <UserList userList={optionList} onSelectOption={_onSelectUser} />
        </div>
      )}
    </div>
  )
}

export default SearchWithOptions
