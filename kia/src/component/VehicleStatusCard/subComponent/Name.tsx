import { bodyFontStyle } from "../../../types/FontSize";
import { NameProps } from "../type/StatysCardType";

const Name = ({ carName }: NameProps) => {
  return <span style={{ ...bodyFontStyle.B1 }}>{carName}</span>;
};
export default Name;
