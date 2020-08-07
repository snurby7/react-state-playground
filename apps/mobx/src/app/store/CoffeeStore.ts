import { createContext } from 'react'
import { ICoffee } from '../models/Coffee.interface'
import { observable, action, computed } from 'mobx'

export function createCoffeeStore() {
  return {
    coffees: [
      {
        name: 'testy',
        roaster: 'waffle',
        hasPurchased: false,
      },
    ] as ICoffee[],
    remainingCoffees() {
      return this.coffees.filter((coffee) => !coffee.hasPurchased).length
    },
    toggleCoffee: (index: number): void => {
      this.coffees[index].hasPurchased = !this.coffees[index].hasPurchased
    },
    addCoffee: (): void => {
      this.coffees = [
        ...this.coffees,
        {
          name: 'testing',
          roaster: 'roaster-test',
          hasPurchased: false,
        },
      ]
    },
  }
}

export class CoffeeStore {
  @observable
  coffees = []

  @action
  addCoffee() {
    this.coffees.push({
      name: 'testing',
      roaster: 'roaster-test',
      hasPurchased: false,
    })
  }

  @computed
  get coffeeCount() {
    return this.coffees.length
  }
}

export type TCoffeeStore = ReturnType<typeof createCoffeeStore>

// decorate(CoffeeStore, {
//   coffees: observable,
//   remainingCoffees: computed,
//   addCoffee: action,
// })
