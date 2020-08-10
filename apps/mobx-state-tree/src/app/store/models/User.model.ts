import { types } from 'mobx-state-tree'
import { string } from 'mobx-state-tree/dist/internal'

export const UserModel = types.model({
  name: string,
})
