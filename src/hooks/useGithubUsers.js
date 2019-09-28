import { useCallback, useEffect, useState } from 'react'

import useDebounce from './useDebounce'
import { GITHUB_API } from '../constants'

async function searchGithubUsers({ username = '', perPage = 10 }, callback = () => {}) {
  const { ROOT, SEARCH, USERS } = GITHUB_API
  const searchUserURL = `${ROOT}${SEARCH}/${USERS}?q=${username}&per_page=${perPage}`

  return await fetch(searchUserURL)
    .then(response => response.json())
    .then(data => {
      callback(data)
      return data
    })
}

function useGithubUser(debounceTime = 300) {
  const [username, setUsername] = useState('')
  const [perPage, setPerPage] = useState(10)
  const [searchResult, setSearchResult] = useState({})
  const debounceUsername = useDebounce(username, debounceTime)

  const memoOnUsernameChange = useCallback(function _onUsernameChange(evt) {
    setUsername(evt.target.value)
  }, [])

  useEffect(() => {
    if (debounceUsername) {
      searchGithubUsers({ username: debounceUsername, perPage }, setSearchResult)
    }
  }, [debounceUsername, perPage])

  return [username, memoOnUsernameChange, perPage, setPerPage, searchResult]
}

export default useGithubUser
