import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IInitialState {
  count: number;
  todos: ITodo[];
}

const initialState = {
  count: 0,
  todos: [],
} satisfies IInitialState as IInitialState;

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {},
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } =
  todoListSlice.actions;
export default todoListSlice.reducer;
