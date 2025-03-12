import { CSSProperties } from "react";
import { color } from "./style";

type ButtonProps = {
  text: string;
  backgroundColor: 1 | 2 | 3;
};

const Button = ({ backgroundColor, text }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "10px 20px",
    backgroundColor: color.blue[backgroundColor],
  };
  return <button style={{ ...buttonStyle, display: "flex" }}>{text}</button>;
};
export default Button;
