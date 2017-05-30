import {Todo} from "../models/types";
import {TodoAction} from "./actions";

export const reducer = (todos: Array<Todo>, action: TodoAction): Array<Todo> => {

  switch (action.type) {

    case 'ADD':
      return [
        {
          text: action.text,
          completed: false,
          id: getId(todos)
        },
        ...todos];
    case 'REMOVE':
      return todos.filter((todo: Todo) => {
        return todo.id !== action.id;
      });
    case 'COMPLETE':
      return todos.map((todo: Todo) => {
        return todo.id === action.id ?
          {...todo, completed: !todo.completed} : todo;
      });
    default:
      return todos;
  }
};

function getId(todos: Array<Todo>): number {
  return todos.reduce((maxId: any, todo: Todo) => {
      return Math.max(todo.id, maxId);
    }, -1) + 1;
}
