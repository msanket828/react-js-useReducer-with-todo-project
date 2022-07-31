import React, { useReducer, useState } from "react";
import { TodoDetail } from "./TodoDetail";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return { todos: [...state.todos, action.payLoad] };
  }
  if (action.type === "DELETE_TODO") {
    return { todos: state.todos.filter((el) => el.id !== action.payLoad) };
  }
  return { todos: [] };
};

export const JustTodos = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payLoad: {
        id: Date.now(),
        todo,
      },
    });
    setTodo("");
  };

  return (
    <div className="just-todo">
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "#000",
          padding: "5px 0",
          color: "#FFF",
          marginBottom: "10px",
        }}
      >
        Todo's
      </h2>
      <div className="container">
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="enter todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Add Todo</button>
        </form>
        {state.todos.map((indTodo) => (
          <TodoDetail key={indTodo.id} indTodo={indTodo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
