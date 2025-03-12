import { CoolGrayColors, PrimaryColors } from "../../../types/Color";
import { headerFontStyle } from "../../../types/FontSize";

export type Status = "진행대기" | "완료";

type TabButtonProps = {
  text: Status;
  ea: number;
  isSelect: boolean;
  change: () => void;
};
const TabButton = ({ text, ea, isSelect, change }: TabButtonProps) => {
  return (
    <button
      onClick={change}
      style={{
        width: "50%",
        height: "80px",
        fontWeight: "bold",
        background: "none",
        border: "none",
        outline: "none",
        borderBottom: isSelect ? `3px solid ${PrimaryColors.Black}` : "0",
        color: isSelect ? PrimaryColors.Black : CoolGrayColors.Cool_Gray10,
        ...headerFontStyle.H2,
      }}
    >
      {text} {ea}
    </button>
  );
};
export default TabButton;
