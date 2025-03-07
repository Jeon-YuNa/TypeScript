import { useEffect } from "react";
import { useUserStore } from "./stores/user";

const User = () => {
  // const [userName, setUserName] = useState<string>("");
  const { userName, setUserName } = useUserStore();

  useEffect(() => {
    const name: any = prompt("이름을 입력해 주세요.");
    if (name) {
      setUserName(name);
    }
  }, [setUserName]);

  return (
    <div className="box">
      <h2>{userName}님의 TODOLIST</h2>
    </div>
  );
};
export default User;
