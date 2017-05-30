import * as React from "react";
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {Todo, TodoItemsProps} from "../models/types";
import {TodoAction, TodoActions, TodoActionsProps} from "../redux/actions";

class AppComponent extends React.Component<TodoItemsProps & TodoActionsProps, undefined> {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput actions={this.props.actions}/>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </div>
    );
  }
}

function mapStateToProps(state: Array<Todo>): TodoItemsProps {
  return {todos: state};
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): TodoActionsProps {
  return {actions: bindActionCreators(TodoActions, dispatch)}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
