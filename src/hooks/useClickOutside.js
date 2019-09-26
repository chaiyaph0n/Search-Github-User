import { useEffect, useRef } from 'react'

export default function useClickOutside(callback, initRef = null) {
  const parentNode = useRef(initRef)
  const handleClickOutside = e => !parentNode.current.contains(e.target) && callback()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return parentNode
}
