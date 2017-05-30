import * as React from "react";
import {render} from "react-dom";
import {App} from "./components/app";
import {configureStore} from "./redux/store";
import {Provider} from "react-redux";
import {Store} from "redux";
import {Todo} from "./models/types";

const store: Store<Array<Todo>> = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
