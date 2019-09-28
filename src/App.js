import React, { useCallback, useMemo, useState } from 'react'
import { css } from 'emotion'

import SearchWithOptions from './components/SearchWithOptions'
import Select from './components/Select'
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

const searchWrapper = css`
  display: flex;
  width: 80%;

  & > div {
    margin-right: 8px;
  }
`

function App() {
  const [username, setUsername, perPage, setPerPage, searchResult] = useGithubUsers()
  const [selectedUser, setSelectedUser] = useState(null)

  const optionList = useMemo(
    () => [{ name: '10', value: 10 }, { name: '20', value: 20 }, { name: '30', value: 30 }],
    []
  )

  const handleSetSelectedUser = (val = null) => {
    setSelectedUser(val)
    window.open(val.html_url)
  }

  const handleSetPerPage = useCallback(val => {
    setPerPage(val)
  }, [])

  return (
    <div className={appStyle}>
      <label>Search Github's User</label>
      <div className={searchWrapper}>
        <SearchWithOptions
          value={username}
          onChange={setUsername}
          optionList={searchResult}
          onSelectUser={handleSetSelectedUser}
        />
        <Select items={optionList} value={perPage} onSelect={handleSetPerPage} />
      </div>
    </div>
  )
}

export default App
