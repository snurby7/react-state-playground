import { observer } from 'mobx-react'
import React from 'react'
import { useCoffeeStore } from '../hooks/useCoffeeStore'
import { CoffeeList } from './CoffeeList'

export const CoffeeHub = (): JSX.Element => {
  const coffeeStore = useCoffeeStore()
  const onButtonClick = () => coffeeStore.addCoffee()
  return (
    <div>
      <CoffeeList items={coffeeStore.coffees} />
      <button onClick={onButtonClick}>Add Coffee</button>
    </div>
  )
}
