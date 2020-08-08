import { useContext } from 'react'
import { CoffeeContext } from '../store'

export const useCoffeeStore = () => useContext(CoffeeContext)
