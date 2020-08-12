import { values } from 'mobx'
import React from 'react'
import { IRoaster } from '../store'
import { useStore } from '../store/useStore'

export const CoffeeList = (): JSX.Element => {
  const { coffeeStore } = useStore()
  return (
    <div>
      <h2>Coffee List</h2>
      {coffeeStore.coffees.map((coffee) => {
        return (
          <span>
            {coffee.roaster.name} - {coffee.name}
          </span>
        )
      })}
    </div>
  )
}
