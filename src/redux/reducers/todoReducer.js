import * as actionTypes from "../actions/type.js";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NEWTODO:
      return [action.payload, ...state];
    case actionTypes.GET_ALLTODO:
      return action.payload;
    case actionTypes.TOOGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);
    default:
      return state;
  }
};
