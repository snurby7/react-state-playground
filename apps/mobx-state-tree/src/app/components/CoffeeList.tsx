import { values } from 'mobx'
import React from 'react'
import { IRoaster } from '../store'
import { useStore } from '../store/useStore'

export const CoffeeList = (): JSX.Element => {
  const store = useStore()
  return (
    <div>
      <h2>Coffee List</h2>
      {values(store.coffees).map((coffee) => {
        const roaster = coffee.roaster as IRoaster
        return (
          <span>
            {roaster.name} - {coffee.name}
          </span>
        )
      })}
    </div>
  )
}
