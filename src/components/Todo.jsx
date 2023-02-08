import { toggleTodo, updateTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        Color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="fas fa-trash" />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
