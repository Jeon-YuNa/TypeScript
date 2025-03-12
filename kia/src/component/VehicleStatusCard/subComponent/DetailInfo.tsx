type DetailInfoProps = {
  text: string;
  infoData: string;
};
const DetailInfo = ({ text, infoData }: DetailInfoProps) => {
  return (
    <li
      style={{
        listStyle: "none",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{text}</span>
      <span>{infoData}</span>
    </li>
  );
};

export default DetailInfo;
