import React from "react";

export const TodoDetail = ({ indTodo, dispatch,updateTodo,updateTodoId}) => {
  return (
    <div className="todo-detail">
      <div className="container">
        <h2>{indTodo.todo}</h2>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payLoad: indTodo.id })}
          disabled={updateTodoId === indTodo.id ? true : false}
        >
          Delete
        </button>
        <button 
        onClick={()=>updateTodo(indTodo)}>
          Update
        </button>
      </div>
    </div>
  );
};
