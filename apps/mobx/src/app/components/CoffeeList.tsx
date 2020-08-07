import React from 'react'
import { ICoffee } from '../models'
import { CoffeeItem } from './CoffeeItem'
import { observer, useLocalStore } from 'mobx-react'
interface ICoffeeListProps {
  items: ICoffee[]
  onToggle: (coffeeIndex: number) => void
}
export const CoffeeList: React.FC<ICoffeeListProps> = ({
  items,
  onToggle,
}): JSX.Element => {
  console.log(items)
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
}
