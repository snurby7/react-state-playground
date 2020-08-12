import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'

export const Roaster = types
  .model({
    name: types.string,
    id: types.identifier,
  })
  .actions((self) => ({
    updateTitle(title: string) {
      self.name = title
    },
  }))

export const RoastersStore = types.model({
  roasters: types.optional(types.array(Roaster), []),
})

export interface IRoaster extends Instance<typeof Roaster> {}
export interface IRoasterSnapshotIn extends SnapshotIn<typeof Roaster> {}
export interface IRoasterSnapshotOut extends SnapshotOut<typeof Roaster> {}
