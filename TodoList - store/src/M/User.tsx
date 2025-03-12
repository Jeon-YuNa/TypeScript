import { useEffect } from "react";
import { useUserStore } from "../stores/user";

const User = () => {
  // const [userName, setUserName] = useState<string>("");
  const { userName, setUserName, setTodolist } = useUserStore();

  useEffect(() => {
    const addName = prompt("이름을 입력해 주세요.");
    if (addName) {
      setUserName(addName);
      localStorage.setItem("userName", addName);
      const dataList = JSON.parse(localStorage.getItem(addName) || "[]");
      setTodolist(dataList);
    }
  }, [setUserName, setTodolist]);

  return (
    <div className="box  p-[3vw]">
      <h2 className="text-[3.2vw]">{userName}님의 TODOLIST</h2>
    </div>
  );
};
export default User;
