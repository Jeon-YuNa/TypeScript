import TabButton, { Status } from "./subComponent/TabButton";
import { CoolGrayColors } from "../../types/Color";

type TabProps = {
  isSelect: Status;
  wait: () => void;
  complate: () => void;
};
const Tab = ({ isSelect, wait, complate }: TabProps) => {
  return (
    <div
      style={{
        padding: "0 15px",
        borderBottom: `1px solid ${CoolGrayColors.Cool_Gray10}`,
      }}
    >
      <TabButton
        change={wait}
        isSelect={"진행대기" == isSelect}
        text={"진행대기"}
        ea={4}
      />
      <TabButton
        change={complate}
        isSelect={"완료" == isSelect}
        text={"완료"}
        ea={2}
      />
    </div>
  );
};
export default Tab;
