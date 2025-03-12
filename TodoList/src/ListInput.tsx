import { useEffect, useState } from "react";

export type InputProps = {
  onChange: (some: string) => void;
};
const ListInput = ({ onChange }: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="py-20 flex items-center my-[1vw]">
      <span className="text-[2.3vw] font-bold">+</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full h-[3.3vw] border-none bg-inherit outline-none text-[1.3vw]"
        style={{
          borderBottom: "1px solid  #fff",
          margin: "0 0.8vw",
        }}
      />
      <button
        onClick={() => {
          if (value.trim() !== "") {
            onChange(value);
            setValue("");
          }
        }}
        className="bg-[#333] font-bold px-[2vw] py-[1vw]"
      >
        SEND
      </button>
    </div>
  );
};
export default ListInput;
