import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'

export const User = types.model('User', {
  id: types.identifier,
  name: types.string,
})

export interface IUser extends Instance<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}
