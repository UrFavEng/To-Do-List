import React, { useState } from "react";

const AddForm = ({ setTask, task, setTodos, todos }) => {
  const [inOrNot, setInOrNot] = useState(false);
  const [emty, setEmty] = useState(false);
  const handleAdd = (e) => {
    setInOrNot(false);
    setEmty(false);
    e.preventDefault();
    console.log(todos);
    if (e.target[0].value != "") {
      if (todos.length > 0) {
        for (let i = 0; i < todos.length; i++) {
          console.log(todos[i]);
          if (!todos.some((todo) => todo === e.target[0].value)) {
            setTodos([...todos, task]);
            setInOrNot(false);
            setEmty(false);
            setTask("");
          } else {
            setInOrNot(true);
            setTask("");
            setEmty(false);
          }
        }
      } else {
        setTodos([...todos, task]);
      }
    } else {
      setEmty(true);
    }
  };
  return (
    <>
      <form
        className="my-[30px] text-center flex justify-center items-center"
        onSubmit={handleAdd}
      >
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="h-[45px] w-[60%] pl-[10px] rounded-sm mr-[10px] border-none outline-none"
          placeholder="Enter Your Task"
        />
        <input
          type="submit"
          value={"Add"}
          className="h-[40px] w-[80px] mr-[10px] bg-addBtn text-[18px] font-semibold cursor-pointer border-none outline-none rounded-sm text-paraClr"
        />
      </form>
      {inOrNot && (
        <p className=" text-remvBtn mt-[-15px] text-center font-medium text-[18px]">
          The task already exists
        </p>
      )}
      {emty && (
        <p className=" text-remvBtn mt-[-15px] text-center font-medium text-[18px]">
          Please Enter The Task
        </p>
      )}
    </>
  );
};

export default AddForm;
