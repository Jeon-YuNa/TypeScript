export type OutputProps = { value: string; isDone: boolean };

const ListInput = ({ value, isDone }: OutputProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input type="checkbox" checked={isDone} />
      <p>{value}</p>
      <span>삭제</span>
    </div>
  );
};
export default ListInput;
