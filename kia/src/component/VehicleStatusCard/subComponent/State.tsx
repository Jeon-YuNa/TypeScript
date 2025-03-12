import { bodyFontStyle } from "../../../types/FontSize";
import { StatusProps } from "../type/StatysCardType";
import { stateTextColor } from "../style/statusColor";

const States = ({ carStatus }: StatusProps) => {
  return (
    <span
      style={{
        ...bodyFontStyle.B2,
        color: stateTextColor[carStatus],
        fontWeight: "bold",
      }}
    >
      {carStatus}
    </span>
  );
};
export default States;
