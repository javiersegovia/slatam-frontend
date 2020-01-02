import React, { createContext } from 'react'
import useWindowSize from '@hooks/useWindowSize'

export const WindowSizeContext = createContext()

const WindowSizeProvider = props => {
  const windowSize = useWindowSize()

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {props.children}
    </WindowSizeContext.Provider>
  )
}

export default WindowSizeProvider
