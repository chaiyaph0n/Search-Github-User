import { useCallback, useEffect, useState } from 'react'

import useDebounce from './useDebounce'
import { GITHUB_API } from '../constants'

function useGithubUser(debounceTime = 300) {
  const [username, setUsername] = useState('')
  const [userDetail, setUserDetail] = useState({})
  const debounceUsername = useDebounce(username, debounceTime)

  const memoOnUsernameChange = useCallback(function _onUsernameChange(evt) {
    setUsername(evt.target.value)
  }, [])

  async function searchGithubUsers(val) {
    const { ROOT, SEARCH, USERS } = GITHUB_API
    const searchUserURL = `${ROOT}${SEARCH}/${USERS}?q=${val}`
    return await fetch(searchUserURL)
      .then(response => response.json())
      .then(userDetail => setUserDetail(userDetail))
  }

  useEffect(() => {
    if (debounceUsername) searchGithubUsers(debounceUsername)
  }, [debounceUsername])

  return [username, memoOnUsernameChange, userDetail]
}

export default useGithubUser
