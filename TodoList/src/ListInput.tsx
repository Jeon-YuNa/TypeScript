import { useEffect, useState } from "react";

export type InputProps = {
  onChange: (some: string) => void;
};
const ListInput = ({ onChange }: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onChange(value);
          setValue("");
        }}
      >
        추가
      </button>
    </div>
  );
};
export default ListInput;
