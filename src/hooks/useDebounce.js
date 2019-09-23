import { useEffect, useState } from 'react'

function useDebounce(value = null, debounceTime = 300) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, debounceTime)
    return () => {
      clearTimeout(timeout)
    }
  }, [value, debounceTime])

  return debounceValue
}

export default useDebounce
