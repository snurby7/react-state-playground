import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useStore, IRoasterSnapshotIn } from '../store'
import { CoffeeList } from './CoffeeList'
import { observer } from 'mobx-react'

interface RoasterSelectionProps {
  name: string
  roasters: IRoasterSnapshotIn[]
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const RoasterSelection = observer(
  ({ name, roasters, onChange, value }: RoasterSelectionProps): JSX.Element => {
    return (
      <select value={value} name={name} onChange={onChange}>
        {roasters.map((roaster) => (
          <option value={roaster.id}>{roaster.name}</option>
        ))}
      </select>
    )
  }
)

export const CoffeeForm = (): JSX.Element => {
  const { coffeeStore, roasterStore } = useStore()
  const [coffeeName, setCoffeeName] = useState('')
  const [roasterId, setRoasterId] = useState(roasterStore.roasters[0].id)
  const onCoffeeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoffeeName(event.target.value)
  }

  const onRoasterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoasterId(event.target.value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    coffeeStore.addCoffee({ name: coffeeName, roaster: roasterId })
  }

  return (
    <div>
      <CoffeeList coffees={coffeeStore.coffees} />
      <h2>Coffee Form</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="Coffee">
          Name:
          <input onChange={onCoffeeNameChange} name="Coffee"></input>
        </label>
        <label htmlFor="roaster">
          <RoasterSelection
            name="roaster"
            value={roasterId}
            roasters={roasterStore.roasters}
            onChange={onRoasterChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
