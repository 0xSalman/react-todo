export type Todo = {
  id: number,
  text: string,
  completed: boolean
}

export type TodoItemsProps = {
  todos: Array<Todo>
}

export type TodoItemProps = {
  todo: Todo
}