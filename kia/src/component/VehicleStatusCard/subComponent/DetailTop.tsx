import { useNavigate } from "react-router";
import { stateBgColorbj, stateTextColor } from "../style/statusColor";
type DetailTopProps = {
  id: number;
  status: "완료" | "미완료" | "대기";
};
const DetailTop = ({ id, status }: DetailTopProps) => {
  const navi = useNavigate();
  const gotoBack = () => {
    navi("/");
  };

  return (
    <div
      style={{
        backgroundColor: stateBgColorbj[status],
        padding: "20px",
      }}
    >
      <div onClick={gotoBack} className="backBtn">
        ←
      </div>
      <p
        style={{
          color: stateTextColor[status],
          fontWeight: "bold",
        }}
      >
        {status}
      </p>
      <h3>인증 검수</h3>
      <p>
        <span>매입ID</span> | <span>{id}</span>
      </p>
    </div>
  );
};

export default DetailTop;
