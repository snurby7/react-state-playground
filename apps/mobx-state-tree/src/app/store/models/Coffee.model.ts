import { types, Instance, SnapshotIn, destroy } from 'mobx-state-tree'
import { Roaster } from './Roaster.model'

export const Coffee = types.model({
  name: types.string,
  roaster: types.reference(Roaster),
})

export interface ICoffeeSnapshotIn extends SnapshotIn<typeof Coffee> {}

type CoffeeType = typeof Coffee

export const CoffeesStore = types
  .model({
    coffees: types.optional(types.array(Coffee), []),
  })
  .actions((self) => ({
    addCoffee(coffee: ICoffeeSnapshotIn | Instance<CoffeeType>) {
      self.coffees.push(coffee)
    },
    deleteCoffee(coffee: ICoffeeSnapshotIn) {
      destroy(coffee)
    },
  }))
