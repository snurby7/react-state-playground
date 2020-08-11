import React, { ChangeEvent, FormEvent, useState } from 'react'

interface RoasterFormProps {}
export const RoasterForm: React.FC<RoasterFormProps> = ({}): JSX.Element => {
  const [roasterName, setRoasterName] = useState('')

  const onRoasterNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoasterName(event.target.value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('TODO', roasterName)
  }

  return (
    <div>
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