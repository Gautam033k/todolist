import axios from 'axios';

import {
  ADD_NEWTODO,
  GET_ALLTODO,
  TOOGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOOGLE_TAB,
} from './type.js';

const API_URL = 'https://todolist-api-my2u.onrender.com/';

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADD_NEWTODO, payload: res.data });
  } catch (error) {
    console.log('error while calling addnewTodo');
  }
};

//import all todos from DB

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GET_ALLTODO, payload: res.data });
  } catch (error) {
    console.log('error while getting all todo');
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOOGLE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while toggling all todo');
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while updating all todo');
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while deleting all todo', error.message);
  }
};

export const toogleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOOGLE_TAB, selected: tab });
};
