import React from "react";

const TodoList = ({ allTodos, handleEdit, handleDelete }) => {
  return (
    <ul className="groupTodo">
      {allTodos.map((t) => {
        return (
          <li className="singleTodo" key={t.id}>
            <span className="todoText">{t.singleTodo}</span>
            <button className="btn" onClick={() => handleEdit(t.id)}>
              Edit
            </button>
            <button className="btn" onClick={() => handleDelete(t.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
