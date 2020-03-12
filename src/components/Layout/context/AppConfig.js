import React, { createContext } from 'react'
import AppConstants from '@constants'

export const AppConfigContext = createContext()

const AppConfigProvider = ({ children }) => {
  return (
    <AppConfigContext.Provider value={AppConstants}>
      {children}
    </AppConfigContext.Provider>
  )
}

export default AppConfigProvider
