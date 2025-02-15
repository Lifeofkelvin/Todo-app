import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, colorMode, handleCompletedTodo, handleDeleteTodo }) {
  return (
    <>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem key={todo.id} colorMode={colorMode} todo={todo} handleCompletedTodo={handleCompletedTodo} handleDeleteTodo={handleDeleteTodo} />
        ))}
    </>
  );
}

export default TodoList;
