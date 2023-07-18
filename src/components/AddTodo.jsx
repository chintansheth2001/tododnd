import React from "react";
import { ADD_TODO } from "./ActionType";
import { AppContext } from "./AppContext";

const AddTodo = () => {
  const [state, dispatch] = React.useContext(AppContext);
  const [newTodo, setNewTodo] = React.useState("");

  const onAdd = () => {
    dispatch({ type: ADD_TODO, payload: newTodo });
    setNewTodo("");
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="addTodo">
      <input
        value={newTodo}
        onChange={(e) => {
          handleChange(e);
        }}
        className="addTodoInput"
        type="text"
        placeholder="Add new todo"
      />
      <button onClick={() => onAdd()}>Add</button>
    </div>
  );
};

export default AddTodo;
