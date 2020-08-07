import React from 'react'
import { createCoffeeStore, TCoffeeStore } from './CoffeeStore'
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0

const storeContext = React.createContext<TCoffeeStore | null>(null)

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createCoffeeStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useCoffeeStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
