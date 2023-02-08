import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducers } from "./reducers/todoReducer.js";
import { tabReducer } from "./reducers/tabReducer.js";

const reducer = combineReducers({
  todo: todoReducers,
  currentTab: tabReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
