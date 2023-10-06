import React from "react";
import Task from "./Task";

const DisplayTasks = ({ todos, setTodos }) => {
  return (
    <div className="text-center">
      {todos.length > 0 &&
        todos?.map((task) => (
          <Task task={task} key={task} setTodos={setTodos} todos={todos} />
        ))}
    </div>
  );
};

export default DisplayTasks;
