import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { createContext } from 'react'
import { CoffeesStore, RoastersStore } from './models'

export const RootModel = types.model({
  coffeeStore: CoffeesStore,
  //  userbase: User,
  roasterStore: RoastersStore,
})

export const rootStore = RootModel.create({
  coffeeStore: {
    coffees: [
      {
        name: 'Example Coffee',
        roaster: 'test-123',
      },
    ],
  },
  roasterStore: {
    roasters: [{ name: 'Default Roaster', id: 'test-123' }],
  },
})

const states = []
let currentFrame = -1

onSnapshot(rootStore, (snapshot) => {
  if (currentFrame === states.length - 1) {
    currentFrame++
    states.push(snapshot)
  }
})

export type RootInstance = Instance<typeof RootModel>
export const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider
