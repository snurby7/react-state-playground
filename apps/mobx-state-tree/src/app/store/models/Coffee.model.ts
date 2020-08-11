import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { Roaster } from './Roaster.model'

export const Coffee = types
  .model({
    name: types.string,
    roaster: types.reference(Roaster),
  })
  .actions((self) => ({}))

export interface ICoffee extends Instance<typeof Coffee> {}
export interface ICoffeeSnapshotIn extends SnapshotIn<typeof Coffee> {}
export interface ICoffeeSnapshotOut extends SnapshotOut<typeof Coffee> {}
