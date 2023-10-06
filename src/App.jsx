import { useEffect, useState } from "react";
import "./App.css";
import { AddForm, DisplayTasks } from "./components";
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  return (
    <div>
      <h1 className=" text-hedingClr text-center text-[50px] font-bold tracking-[-1px] my-[10px]">
        To Do List
      </h1>
      <div className="container">
        <AddForm
          setTask={setTask}
          task={task}
          setTodos={setTodos}
          todos={todos}
        />
        {todos.length > 0 && <DisplayTasks todos={todos} setTodos={setTodos} />}
      </div>
    </div>
  );
}

export default App;
