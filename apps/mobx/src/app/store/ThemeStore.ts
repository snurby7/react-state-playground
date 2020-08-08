import { observable, action } from 'mobx'

export class ThemeStore {
  @observable
  theme = 'light'

  @action
  setTheme(newTheme: string) {
    this.theme = newTheme
  }
}
