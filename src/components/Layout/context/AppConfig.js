import React, { createContext } from 'react'
import AppConfig from '@config'

export const AppConfigContext = createContext()

const AppConfigProvider = ({ children }) => {
  return (
    <AppConfigContext.Provider value={AppConfig}>
      {children}
    </AppConfigContext.Provider>
  )
}

export default AppConfigProvider
