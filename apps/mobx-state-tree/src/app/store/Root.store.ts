import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { Coffee, ICoffee, Roaster, User } from './models'

export const RootStore = types
  .model({
    coffees: types.array(Coffee),
    users: types.map(User),
    roasters: types.map(Roaster),
  })
  .actions((self) => ({
    addCoffee(coffee: ICoffee) {
      self.coffees.push(coffee)
    },
  }))

const rootStore = RootStore.create({
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

export const store = rootStore
export interface IRootStore extends Instance<typeof RootStore> {}

const states = []
let currentFrame = -1

onSnapshot(store, (snapshot) => {
  if (currentFrame === states.length - 1) {
    currentFrame++
    states.push(snapshot)
  }
})
