import React from "react";

export const TodoDetail = ({ indTodo, dispatch }) => {
  return (
    <div className="todo-detail">
      <div className="container">
        <h2>{indTodo.todo}</h2>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payLoad: indTodo.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
