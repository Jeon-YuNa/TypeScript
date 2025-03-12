export type InputProps = {
  onChange: (some: string) => void;
  value: any;
  setValue: any;
  onAdd: any;
};
const ListInput = ({ value, setValue, onAdd }: InputProps) => {
  // const [value, setValue] = useState<string>("");

  return (
    <div className="py-20 flex items-center my-[2vw]">
      <span className="text-[6vw] font-bold">+</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full h-[6vw] border-none bg-inherit outline-none text-[2.8vw] mt-[2vw] mx-[2vw]"
        style={{
          borderBottom: "1px solid  #fff",
        }}
      />
      <button
        onClick={onAdd}
        className="bg-[#333] font-bold px-[3vw] py-[1.5vw] text-[2.2vw]"
      >
        SEND
      </button>
    </div>
  );
};
export default ListInput;
