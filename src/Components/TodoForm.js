import React from "react";

const TodoForm = ({ handleSubmit, singleTodo, setSingleTodo, editId }) => {
  return (
    <form className="formTodo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputTodo"
        value={singleTodo}
        onChange={(e) => {
          setSingleTodo(e.target.value);
        }}
      />
      <button type="submit" className="submit-btn">
        {editId ? "Edit" : "Go"}
      </button>
    </form>
  );
};

export default TodoForm;
