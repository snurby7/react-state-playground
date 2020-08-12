import { useContext } from 'react'
import { RootStoreContext } from './Root.store'

export const useStore = () => {
  const store = useContext(RootStoreContext)
  if (!store) {
    throw new Error('Store is null, this is jacked')
  }
  return store
}
