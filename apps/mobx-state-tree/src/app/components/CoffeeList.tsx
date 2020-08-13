import React from 'react'
import { observer } from 'mobx-react'
import { ICoffeeComplex } from '../store/models'

interface ICoffeeListProps {
  coffees: ICoffeeComplex[]
}
export const CoffeeList = observer(
  ({ coffees }: ICoffeeListProps): JSX.Element => {
    return (
      <div>
        <h2>Coffee List</h2>
        {coffees.map((coffee) => {
          return (
            <span>
              {coffee.name}- {coffee.roaster.name}
            </span>
          )
        })}
      </div>
    )
  }
)
