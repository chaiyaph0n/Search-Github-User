import React, { useState } from 'react'
import { css } from 'emotion'

import SearchWithOptions from './components/SearchWithOptions'
import useGithubUsers from './hooks/useGithubUsers'

const appStyle = css`
  background-color: #f6f8fa;
  width: 30%;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);

  label {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

function App() {
  const [username, setUsername, userDetail] = useGithubUsers()
  const [selectedUser, setSelectedUser] = useState(null)

  const handleSetSelectedUser = (val = null) => {
    setSelectedUser(val)
    window.open(val.html_url)
  }

  return (
    <div className={appStyle}>
      <label>Search Github's User</label>
      <SearchWithOptions
        value={username}
        onChange={setUsername}
        optionList={userDetail}
        onSelectUser={handleSetSelectedUser}
      />
      {/* TODO: add user detail */}
    </div>
  )
}

export default App
