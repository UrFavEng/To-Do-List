import React, { useState } from "react";

const Task = ({ task, setTodos, todos }) => {
  const [done, setDone] = useState(false);

  const handleDelete = (task) => {
    const newArray = todos?.filter((e) => e !== task);
    setTodos(newArray);
  };
  return (
    <div
      key={task}
      className=" flex justify-center items-center  my-[10px] flex-wrap gap-y-4"
    >
      <div
        className={`${
          done && " line-through "
        }  pl-[10px] rounded-sm text-paraClr text-[17px] font-medium  w-[100%] md:W-[90%] lg:w-[75%] text-left   min-h-[45px] flex bg-[#dbdbdb24] items-center`}
      >
        {task}
      </div>
      <input
        type="checkbox"
        className="mx-[10px]"
        onChange={() => {
          setDone(!done);
        }}
      />
      <button
        onClick={() => {
          handleDelete(task);
        }}
        className="h-[40px] w-[75px] mr-[10px] bg-remvBtn rounded-sm text-paraClr font-semibold cursor-pointer border-none outline-none"
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
