import React from 'react'

import SearchWithOptions from './components/SearchWithOptions'
import useGithubUsers from './hooks/useGithubUsers'

function App() {
  const [username, setUsername, userDetail] = useGithubUsers()

  return (
    <div className="App">
      <label>Github User: </label>
      <SearchWithOptions value={username} onChange={setUsername} optionList={userDetail} />
    </div>
  )
}

export default App
