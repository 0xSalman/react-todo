import * as React from "react";
import {TodoActionsProps} from "../redux/actions";

type TodoInputState = {
  inputText: string
}

export class TodoInput extends React.Component<TodoActionsProps, TodoInputState> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      inputText: ''
    }
  }

  handleChange(event: any) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.actions.add(this.state.inputText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text'
                 placeholder='Title'
                 value={this.state.inputText}
                 onChange={this.handleChange.bind(this)}
          />
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}
