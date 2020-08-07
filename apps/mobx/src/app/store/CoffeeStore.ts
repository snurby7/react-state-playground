import { createContext } from 'react'
import { decorate, observable, computed, action } from 'mobx'
import { ICoffee } from '../models/Coffee.interface'

export class CoffeeStore {
  coffees: ICoffee[] = []

  get remainingCoffees(): number {
    return this.coffees.filter((coffee) => !coffee.hasPurchased).length
  }

  toggleCoffee = (index: number): void => {
    this.coffees[index].hasPurchased = !this.coffees[index].hasPurchased
  }

  addCoffee = (): void => {
    this.coffees = [
      ...this.coffees,
      {
        name: 'testing',
        roaster: 'roaster-test',
        hasPurchased: false,
      },
    ]
  }
}

decorate(CoffeeStore, {
  coffees: observable,
  remainingCoffees: computed,
  addCoffee: action,
})

export const CoffeeContext = createContext(new CoffeeStore())
