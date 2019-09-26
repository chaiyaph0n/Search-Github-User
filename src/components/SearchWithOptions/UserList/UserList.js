import React from 'react'
import { css } from 'emotion'

const optionWrapperStyle = css`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  &,
  > * {
    cursor: pointer;
  }

  img {
    border-radius: 2px;
    margin-right: 8px;
    width: 32px;
  }
`

function UserList({ userList = { items: [] }, onSelectOption }) {
  const { items } = userList

  return (
    !!items.length &&
    items.map(function renderUser(user, idx) {
      const { avatar_url, id, login } = user
      return (
        <div
          key={id}
          className={optionWrapperStyle}
          data-testid={`user-option-wrapper-tid-${idx}`}
          onClick={() => {
            onSelectOption(user)
          }}
        >
          <img data-testid="user-image-tid" src={avatar_url} alt={login} />
          <label data-testid="user-login-name-tid">{login}</label>
        </div>
      )
    })
  )
}

export default UserList
