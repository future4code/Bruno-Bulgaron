import { combineReducers } from "redux";
import task from "./task";

export const rootReducer = combineReducers({
  // Seus reducers aqui
  task: task
});
