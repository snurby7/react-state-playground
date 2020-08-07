import React, { useContext } from 'react'
import { CoffeeContext } from '../store'
import { CoffeeList } from './CoffeeList'

export const CoffeeHub: React.FC = (): JSX.Element => {
  const store = useContext(CoffeeContext)
  return (
    <div>
      <CoffeeList items={store.coffees} onToggle={store.toggleCoffee} />
      <button onClick={store.addCoffee}>Add Coffee</button>
    </div>
  )
}
