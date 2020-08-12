import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { Coffee, ICoffee, Roaster, User, IRoaster } from './models'

export const RootModel = types
  .model({
    coffees: types.array(Coffee),
    users: types.map(User),
    roasters: types.map(Roaster),
  })
  .actions((self) => ({
    addCoffee(coffee: ICoffee) {
      self.coffees.push(coffee)
    },
    addRoaster(id: string, roaster) {
      self.roasters.set(id, roaster)
    },
  }))

export const rootStore = RootModel.create({
  coffees: [
    {
      name: 'testing',
      roaster: 1,
    },
  ],
  users: {},
  roasters: {
    1: { id: '1', name: 'Roasty' },
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
