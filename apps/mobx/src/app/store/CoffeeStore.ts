import { observable, action, computed, decorate } from 'mobx'
import { createContext } from 'react'
import { ICoffee } from '../models'

class CoffeeStore {
  coffees: ICoffee[] = []

  addCoffee() {
    console.log(this)
    this.coffees.push({
      name: 'testing',
      roaster: 'roaster-test',
      hasPurchased: false,
    })
  }

  deleteCoffee(index: number): void {
    this.coffees = this.coffees.splice(index, 1)
  }

  get coffeeCount() {
    return this.coffees.length
  }
}

decorate(CoffeeStore, {
  coffees: observable,
  addCoffee: action,
  deleteCoffee: action,
  coffeeCount: computed,
})

export const CoffeeContext = createContext(new CoffeeStore())
