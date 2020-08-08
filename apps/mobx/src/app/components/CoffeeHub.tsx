import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../hooks/use-stores'
import { CoffeeList } from './CoffeeList'

export const CoffeeHub = observer(
  (): JSX.Element => {
    const { coffeeStore } = useStores()
    return (
      <div>
        <CoffeeList
          items={coffeeStore.coffees}
          onToggle={() => {
            console.log('here it is')
          }}
        />
        <button onClick={() => coffeeStore.addCoffee()}>Add Coffee</button>
      </div>
    )
  }
)
