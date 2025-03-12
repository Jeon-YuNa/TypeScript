export type OutputProps = { value: string; isDone: boolean };

type ListEvent = {
  checkValue: () => void;
  remove: () => void;
};
const ListInput = ({
  value,
  isDone,
  checkValue,
  remove,
}: OutputProps & ListEvent) => {
  return (
    <li
      className={isDone ? "list active" : "list"}
      style={{ padding: "2vw", borderRadius: "1vw", margin: "3vw 0" }}
    >
      <div className="listInput">
        <input onChange={checkValue} type="checkbox" checked={isDone} />
        <span style={{ width: "3vw", height: "3vw" }}></span>
      </div>
      <p className="listText text-[2.8vw] ml-[2vw]">{value}</p>
      <button className="listbtn" onClick={remove}>
        <img src="../../img/trash.png" alt="" />
      </button>
    </li>
  );
};
export default ListInput;
