import { useEffect, useState } from "react";
import { Dashboard } from "../organisms/Dashboard";
import { List } from "../organisms/List";

export function HomePage() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const myTodo = localStorage.getItem("todos");
    if (myTodo) {
      setTodos(JSON.parse(myTodo));
    }
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <div className="flex w-screen justify-around">
        <Dashboard items={todos} setItems={setTodos} />
        <List items={todos} />
      </div>
    </div>
  );
}
