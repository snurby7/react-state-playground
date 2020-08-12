import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useStore } from '../store'

interface CoffeeFormProps {}
export const CoffeeForm: React.FC<CoffeeFormProps> = ({}): JSX.Element => {
  const [coffeeName, setCoffeeName] = useState('')
  const { coffeeStore } = useStore()
  const onCoffeeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoffeeName(event.target.value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('TODO', coffeeName)
  }

  return (
    <div>
      <h2>Coffee Form</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="Coffee">
          Name:
          <input onChange={onCoffeeNameChange} name="Coffee"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
