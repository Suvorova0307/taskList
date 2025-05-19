import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  return <div></div>;
};

export default TodoList;
