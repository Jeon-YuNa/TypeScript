import { useState } from "react";
import User from "./User";
import ListInput from "./ListInput";
import ListOutput, { OutputProps } from "./ListOutput";
import "./style/reset.css";
import "./style/components.css";

const TodoList = () => {
  const [todolist, setTodolist] = useState<OutputProps[]>([]);

  const addList = (text: string) => {
    setTodolist((prev) => {
      const newArr = [...prev];
      newArr.push({ value: text, isDone: false });
      return newArr;
    });
  };

  const checkList = (i: number) => {
    setTodolist((prev) => {
      const newArr = [...prev];
      newArr[i].isDone = !newArr[i].isDone;
      return newArr;
    });
  };

  const deleteList = (i: number) => {
    setTodolist((prev) => {
      const newArr = [...prev].filter((v, w) => w != i);
      return newArr;
    });
  };

  return (
    <div className="box h-full flex flex-col">
      <div className="h-full overflow-hidden">
        <User />
        <ListInput onChange={addList} />
        <ul className="scrollWrap overflow-y-scroll pr-[20px]">
          {todolist.map((v, i) => (
            <ListOutput
              {...v}
              checkValue={() => {
                checkList(i);
              }}
              remove={() => {
                deleteList(i);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
