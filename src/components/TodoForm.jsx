import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

export const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Write you're toDo list here"
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};
