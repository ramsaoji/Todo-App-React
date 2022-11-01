import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [singleTodo, setSingleTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = allTodos.find((i) => i.id === editId);

      const updatedTodo = allTodos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, singleTodo: singleTodo })
          : { id: t.id, singleTodo: t.singleTodo }
      );

      setAllTodos(updatedTodo);
      setEditId(0);
      setSingleTodo("");
      return;
    }

    if (singleTodo !== "") {
      setAllTodos([{ id: Date.now(), singleTodo: singleTodo }, ...allTodos]);
    }
    setSingleTodo("");
  };

  const handleDelete = (id) => {
    const delTodo = allTodos.filter((t) => t.id !== id);
    setAllTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const getEditText = allTodos.find((t) => t.id === id);
    setSingleTodo(getEditText.singleTodo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Todo App</h2>
        <div className="wrapper">
          <TodoForm
            handleSubmit={handleSubmit}
            singleTodo={singleTodo}
            setSingleTodo={setSingleTodo}
            editId={editId}
          />
          <TodoList
            allTodos={allTodos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
