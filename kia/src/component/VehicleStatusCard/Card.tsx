import { CardProps } from "./type/StatysCardType";
import { stateBgColorbj } from "./style/statusColor";
import Name from "./subComponent/Name";
import Number from "./subComponent/Number";
import States from "./subComponent/State";
import { useNavigate } from "react-router";

const Card = ({ id, carStatus, carName, carNumber }: CardProps) => {
  const navi = useNavigate();
  const gotoAbout = () => {
    navi(`/detail/${id}`);
    //1. param
    // navi("/detail?id=1");
    //2. depth
    // navi("/detail/1");
  };

  return (
    <div
      onClick={gotoAbout}
      className="card"
      style={{ backgroundColor: stateBgColorbj[carStatus], padding: "15px" }}
    >
      <div
        className="top"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Name carName={carName} />
        <States carStatus={carStatus} />
      </div>
      <Number carNumber={carNumber} />
    </div>
  );
};
export default Card;
