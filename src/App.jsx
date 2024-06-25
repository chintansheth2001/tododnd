import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodosCol from "./components/TodosCol";
import { AppContext } from "./components/AppContext";

function App() {
  return (
    <>
      <main className="main">
        <AddTodo />
        <TodosCol />
      </main>
    </>
  );
}
export default App;
