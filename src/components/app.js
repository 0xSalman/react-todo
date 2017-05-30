var __extends = (this && this.__extends) || (function() {
    var extendStatics = Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array && function(d, b) { d.__proto__ = b; }) ||
      function(d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  })();
import * as React from 'react';
import {TodoInput} from './TodoInput';
import {TodoList} from './TodoList';
import {connect} from 'react-redux';
var AppComponent = (function(_super) {
  __extends(AppComponent, _super);
  function AppComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AppComponent.prototype.render = function() {
    return (React.createElement("div", null,
      React.createElement("h1", null, "Todo List"),
      React.createElement(TodoInput, {dispatch: this.props.dispatch}),
      React.createElement(TodoList, {todos: this.props.todos})));
  };
  return AppComponent;
}(React.Component));
var mapStateToProps = function(state) {
  return state;
};
export var App = connect(mapStateToProps)(AppComponent);
//# sourceMappingURL=app.js.map
