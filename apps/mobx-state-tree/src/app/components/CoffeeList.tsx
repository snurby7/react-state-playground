import { entries, values } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { ICoffee, IRootStore } from '../store'

interface ICoffeeListProps {
  store: IRootStore
}
export const CoffeeList = observer(
  ({ store }: ICoffeeListProps): JSX.Element => {
    return (
      <div>
        <h2>Coffee List</h2>
        {values(store.coffees).map((coffee) => {
          console.log('TODO: these types are a mess')
          // console.log(coffee.name, coffee.roaster.name)
          return <span> - tsting</span>
        })}
      </div>
    )
  }
)
