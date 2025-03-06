import { useState } from "react";
import ListInput from "./ListInput";
import ListOutput, { OutputProps } from "./ListOutput";

const TodoList = () => {
  const [todolist, setTodolist] = useState<OutputProps[]>([
    {
      value: "잠자기",
      isDone: false,
    },
    {
      value: "과제하기",
      isDone: false,
    },
  ]);

  const addList = (some: string) => {
    setTodolist((prev) => {
      const newArr = [...prev];
      newArr.push({ value: some, isDone: false });
      return newArr;
    });
  };

  return (
    <div>
      <ListInput onChange={addList} />
      {todolist.map((v) => (
        <ListOutput {...v} />
      ))}
    </div>
  );
};
export default TodoList;
