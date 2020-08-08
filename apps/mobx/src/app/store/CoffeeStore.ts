import { observable, action, computed } from 'mobx'

export class CoffeeStore {
  @observable
  coffees = []

  @action
  addCoffee() {
    console.log(this)
    this.coffees.push({
      name: 'testing',
      roaster: 'roaster-test',
      hasPurchased: false,
    })
  }

  @action
  deleteCoffee(index: number): void {
    this.coffees = this.coffees.splice(index, 1)
  }

  @computed
  get coffeeCount() {
    return this.coffees.length
  }
}
