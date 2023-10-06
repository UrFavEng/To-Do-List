import { useState } from "react";
const AddForm = ({ setTask, task, setTodos, todos }) => {
  const [inOrNot, setInOrNot] = useState(false);
  const [emty, setEmty] = useState(false);
  const handleAdd = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setInOrNot(false);
    setEmty(false);
    e.preventDefault();
    if (e.target[0].value.trim() != "") {
      if (todos.length > 0) {
        for (let i = 0; i < todos.length; i++) {
          if (!todos.some((todo) => todo === e.target[0].value)) {
            setTodos([task, ...todos]);
            localStorage.setItem("todos", JSON.stringify([...todos, task]));
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
        setTodos([task]);
        setTask("");
        const frstEle = [task];
        localStorage.setItem("todos", JSON.stringify(frstEle));
      }
    } else {
      setEmty(true);
    }
  };
  const handleDeleteAll = () => {
    setTodos([]);
    localStorage.setItem("todos", JSON.stringify([]));
  };
  return (
    <>
      <form
        className="my-[30px] text-center flex  gap-y-4 lg:flex-row justify-center items-center flex-wrap"
        onSubmit={handleAdd}
      >
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="h-[45px] bg-[#f4f2ee] border-b-[1px]  border-black w-[100%] md:W-[90%] lg:w-[80%] pl-[10px] sm:mr-[10px]  outline-none"
          placeholder="Enter Your Task"
        />
        <input
          type="submit"
          value={"Add"}
          className="h-[38px] w-[60px] lg:mr-[10px] bg-addBtn text-[18px] font-semibold cursor-pointer border-none outline-none rounded-sm text-paraClr"
        />
        {todos.length > 1 && (
          <input
            type="button"
            value={"Remove All"}
            onClick={handleDeleteAll}
            className="h-[38px] w-[110px]  bg-remvBtn text-[18px] font-semibold cursor-pointer border-none outline-none rounded-sm text-paraClr"
          />
        )}
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
