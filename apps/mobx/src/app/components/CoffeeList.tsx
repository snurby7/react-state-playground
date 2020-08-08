import React from 'react'
import { ICoffee } from '../models'
import { CoffeeItem } from './CoffeeItem'
import { observer } from 'mobx-react'
interface ICoffeeListProps {
  items: ICoffee[]
}

// ! Important note: if this isn't an Observer, it won't re-render the list.
export const CoffeeList = observer(({ items }: ICoffeeListProps) => {
  const onItemClick = (index: number) => () => {
    console.log('-----', index)
  }
  return (
    <div>
      {items.map((item, index) => (
        <CoffeeItem key={item.name} item={item} onClick={onItemClick(index)} />
      ))}
    </div>
  )
})
