import React from "react";

export const TodoContext = React.createContext({
  todos: [],
  setTodos: () => {},
});
