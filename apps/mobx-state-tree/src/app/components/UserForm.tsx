import React, { ChangeEvent, FormEvent, useState } from 'react'

interface UserFormProps {}
export const UserForm: React.FC<UserFormProps> = ({}): JSX.Element => {
  const [userName, setUserName] = useState('')

  const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('TODO', userName)
  }

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="User">
          Username:
          <input onChange={onUserNameChange} name="User"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
