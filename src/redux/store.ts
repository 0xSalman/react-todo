import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import {Todo} from "../models/types";

const initialState: Array<Todo> = [
  {
    id: 0,
    text: 'Demo todo',
    completed: false,
  }
];

export const configureStore = (state: Array<Todo> = initialState) => {
  return createStore(reducer, state, applyMiddleware(thunk, logger));
};
