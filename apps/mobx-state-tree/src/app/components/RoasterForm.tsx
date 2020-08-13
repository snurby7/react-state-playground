import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useStore } from '../store'
import { RoasterList } from './RoasterList'

interface RoasterFormProps {}
export const RoasterForm: React.FC<RoasterFormProps> = ({}): JSX.Element => {
  const [roasterName, setRoasterName] = useState('')
  const { roasterStore } = useStore()

  const onRoasterNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoasterName(event.target.value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    roasterStore.addRoaster({ name: roasterName, id: roasterName })
    setRoasterName('')
  }

  return (
    <div>
      <RoasterList roasters={roasterStore.roasters} />
      <h2>Roaster Form</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="roaster">
          Roaster:
          <input onChange={onRoasterNameChange} name="roaster"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
