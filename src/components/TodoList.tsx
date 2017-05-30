import * as React from "react";
import {Todo, TodoItemsProps} from "../models/types";
import {TodoItem} from "./TodoItem";
import {TodoActionsProps} from "../redux/actions";

export class TodoList extends React.Component<TodoItemsProps & TodoActionsProps, any> {

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }
      </ul>
    );
  }
}
