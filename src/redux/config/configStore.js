import { createStore } from "redux";
import { combineReducers } from "redux";
import lists from "../modules/todos";
import inputs from "../modules/input";

const rootReducer = combineReducers({
  todos: lists,
  input: inputs,
});
const store = createStore(rootReducer);

export default store;
