import React from 'react'
import { CoffeeStore, ThemeStore } from '../store'

export const AppContext = React.createContext({
  coffeeStore: new CoffeeStore(),
  themeStore: new ThemeStore(),
})
