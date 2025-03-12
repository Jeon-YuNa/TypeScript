import { headerFontStyle } from "../../../types/FontSize";
import { NumberProps } from "../type/StatysCardType";

const Number = ({ carNumber }: NumberProps) => {
  return <span style={{ ...headerFontStyle.H1 }}>{carNumber}</span>;
};
export default Number;
