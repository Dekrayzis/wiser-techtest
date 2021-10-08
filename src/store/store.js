import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storeReducer from "./apodReducer";

export const store = createStore(
  combineReducers({
    apodData: storeReducer,
  }),{},
  applyMiddleware(thunk)
);