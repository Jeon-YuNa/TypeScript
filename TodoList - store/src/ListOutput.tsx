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
    <li className={isDone ? "list active" : "list"}>
      <div className="listInput">
        <input onChange={checkValue} type="checkbox" checked={isDone} />
        <span></span>
      </div>
      <p className="listText">{value}</p>
      <button className="listbtn" onClick={remove}>
        <img src="../../img/trash.png" alt="" />
      </button>
    </li>
  );
};
export default ListInput;
