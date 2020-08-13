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

type RoasterType = typeof Roaster
export interface IRoasterSnapshotIn extends SnapshotIn<RoasterType> {}
export interface IRoasterReference {}

export const RoastersStore = types
  .model({
    roasters: types.optional(types.array(Roaster), []),
  })
  .actions((self) => ({
    addRoaster(roaster: IRoasterSnapshotIn | Instance<RoasterType>) {
      self.roasters.push(roaster)
      console.log(self.roasters)
    },
  }))
