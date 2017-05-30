import * as React from "react";
import {TodoItemProps} from "../models/types";
import {TodoActionsProps} from "../redux/actions";

export class TodoItem extends React.Component<TodoActionsProps & TodoItemProps, undefined> {

  handleComplete(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.actions.complete(this.props.todo.id);
  }

  handleRemove(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.actions.remove(this.props.todo.id);
  }

  render() {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Completed</button>
        <button onClick={this.handleRemove.bind(this)}>Delete</button>
      </li>
    );
  }
}
