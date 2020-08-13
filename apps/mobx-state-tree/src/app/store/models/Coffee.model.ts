import {
  types,
  Instance,
  SnapshotIn,
  destroy,
  SnapshotOut,
  SnapshotOrInstance,
} from 'mobx-state-tree'
import { Roaster } from './Roaster.model'

export const Coffee = types
  .model({
    name: types.string,
    roaster: types.reference(Roaster),
  })
  .actions((self) => ({
    updateName(name: string) {
      self.name = name
    },
  }))

type CoffeeType = typeof Coffee

export interface ICoffeeComplex extends Instance<CoffeeType> {}
export interface ICoffeeSnapshotIn extends SnapshotIn<CoffeeType> {}
export interface ICoffeeSnapshotOut extends SnapshotOut<CoffeeType> {}

export const CoffeesStore = types
  .model({
    coffees: types.optional(types.array(Coffee), []),
  })
  .actions((self) => ({
    addCoffee(coffee: SnapshotOrInstance<CoffeeType>) {
      self.coffees.push(coffee)
    },
    deleteCoffee(coffee: ICoffeeSnapshotIn) {
      destroy(coffee)
    },
  }))
