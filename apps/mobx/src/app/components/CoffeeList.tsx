import React from 'react'
import { ICoffee } from '../models'
import { CoffeeItem } from './CoffeeItem'
import { observer, useLocalStore } from 'mobx-react'
interface CoffeeListProps {
  items: ICoffee[]
  onToggle: (coffeeIndex: number) => void
}
export const CoffeeList = observer<{ items: ICoffee[] }>(
  ({ items, onToggle }) => {
    console.log(items)
    const onItemClick = (index: number) => () => {
      console.log('-----', index)
    }
    return (
      <div>
        {items.map((item, index) => (
          <CoffeeItem item={item} onClick={onItemClick(index)} />
        ))}
      </div>
    )
  }
)

export const TodoList = observer<{ initialTodos: string[] }>(
  ({ initialTodos }) => {
    const todoRef = React.useRef()
    const store = useLocalStore(() => ({
      todos: createTodos(initialTodos) as Record<string, boolean>,
      get pendingTodos() {
        return Object.keys(store.todos).filter(
          (todo) => store.todos[todo] === false
        )
      },
      get doneTodos() {
        return Object.keys(store.todos).filter(
          (todo) => store.todos[todo] === true
        )
      },
      addTodo: () => {
        store.todos[todoRef.current.value] = false
        todoRef.current.value = ''
      },
      toggleTodo: (todo: string) => {
        store.todos[todo] = !store.todos[todo]
      },
    }))

    const renderTodo = (done: boolean) => (todo) => (
      <Todo key={todo} done={done} text={todo} onToggle={store.toggleTodo} />
    )

    return (
      <form onSubmit={store.addTodo}>
        {store.pendingTodos.map(renderTodo(false))}
        {store.doneTodos.map(renderTodo(true))}
        <br />
        <input ref={todoRef} />
        <button>Add todo</button>
      </form>
    )
  }
)
