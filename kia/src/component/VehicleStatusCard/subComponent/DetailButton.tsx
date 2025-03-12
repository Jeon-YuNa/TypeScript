import { PrimaryColors } from "../../../types/Color";

type DetailButtonProps = {
  text: "인증 검수 시작" | "이어서 진행";
  status: "완료" | "미완료" | "대기";
};
const DetailButton = ({ text, status }: DetailButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: PrimaryColors.Black,
        color: PrimaryColors.White,
        width: "100%",
        padding: "10px",
        display: status == "완료" ? "none" : "block",
      }}
    >
      {text}
    </button>
  );
};

export default DetailButton;
