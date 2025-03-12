import { useState } from "react";
import User from "./User";
import ListInput from "./ListInput";
import ListOutput from "./ListOutput";
import "../style/reset.css";
import "../style/components.css";
import { useUserStore } from "../stores/user";

const TodoList = () => {
  // const [todolist, setTodolist] = useState<OutputProps[]>([]);
  const { addList, checkList, deleteList, todolist } = useUserStore();
  const [value, setValue] = useState<string>("");

  const handleAddList = () => {
    if (value) {
      addList(value);
      setValue("");
    }
  };

  return (
    <div className="box h-full flex flex-col">
      <div className="h-full flex flex-col overflow-hidden">
        <User />
        <ListInput
          value={value}
          setValue={setValue}
          onAdd={handleAddList}
          onChange={setValue}
        />
        <ul className="scrollWrap overflow-y-scroll pr-[20px] h-[100%] mb-[1vw]">
          {todolist.map((v: any, i: number) => (
            <ListOutput
              key={i}
              value={v.value}
              isDone={v.isDone}
              checkValue={() => checkList(i)}
              remove={() => deleteList(i)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
