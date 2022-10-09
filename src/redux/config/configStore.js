import { createStore } from "redux";
import { combineReducers } from "redux";
import lists from "../modules/todos";

const rootReducer = combineReducers({
  todos: lists,
});
const store = createStore(rootReducer);

export default store;
