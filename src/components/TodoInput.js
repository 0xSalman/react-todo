var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { addTodo } from '../redux/actions';
var TodoInput = (function (_super) {
    __extends(TodoInput, _super);
    function TodoInput(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            inputText: ''
        };
        return _this;
    }
    TodoInput.prototype.handleChange = function (event) {
        this.setState({
            inputText: event.target.value
        });
    };
    TodoInput.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText));
    };
    TodoInput.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { type: 'text', placeholder: 'Title', value: this.state.inputText, onChange: this.handleChange.bind(this) }),
            React.createElement("button", { onClick: this.handleSubmit.bind(this) }, "Submit")));
    };
    return TodoInput;
}(React.Component));
export { TodoInput };
//# sourceMappingURL=TodoInput.js.map