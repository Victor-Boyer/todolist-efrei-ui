import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Import pages */
import { HomePage } from "./components/pages/Home";
import { TodoContext } from "./context/todos";

function App() {
  const [todos, setTodos] = React.useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  return (
    <Router>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </TodoContext.Provider>
    </Router>
  );
}

export default App;
