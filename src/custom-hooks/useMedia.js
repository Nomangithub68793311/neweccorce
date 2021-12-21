import { useState, useEffect } from 'react'

const useMedia = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)
  useEffect(() => {
    let media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    let listener = () => setMatches(media.matches)
    media.addEventListener(listener)
    return () => media.removeEventListener(listener)
  }, [query, matches])
  return matches
}

export default useMedia
