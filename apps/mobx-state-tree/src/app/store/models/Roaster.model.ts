import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree'

export const Roaster = types
  .model({
    id: types.identifier,
    name: types.string,
  })
  .actions((self) => ({
    updateTitle(title: string) {
      self.name = title
    },
  }))
export interface IRoaster extends Instance<typeof Roaster> {}
export interface IRoasterSnapshotIn extends SnapshotIn<typeof Roaster> {}
export interface IRoasterSnapshotOut extends SnapshotOut<typeof Roaster> {}
