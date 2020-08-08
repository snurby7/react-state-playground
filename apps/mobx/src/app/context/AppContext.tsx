import React from 'react'
import { ThemeStore } from '../store'

export const AppContext = React.createContext({
  themeStore: new ThemeStore(),
})
