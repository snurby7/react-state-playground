import { types } from 'mobx-state-tree'
import { string } from 'mobx-state-tree/dist/internal'

export const CoffeeModel = types.model({
  name: string,
  roaster: string,
})
