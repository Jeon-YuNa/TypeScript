import { useParams } from "react-router";
import { cardData } from "./data/CardData";
import DetailTop from "./subComponent/DetailTop";
import DetailCenter from "./subComponent/DetailCenter";
import DetailInfo from "./subComponent/DetailInfo";

const Cardetail = () => {
  const { teemo } = useParams(); //URL 읽어주는 친구

  const filterData = cardData.find((v) => {
    return v.id == parseInt(teemo || "0");
  });

  if (!filterData) return <>no Data</>;

  return (
    <>
      <section style={{ width: "640px", margin: "0 auto" }}>
        <DetailTop status={filterData.carStatus} id={filterData.id} />
        <DetailCenter imgUrl={filterData?.img} />
        <div className="info">
          <ul>
            <DetailInfo text={"차량번호"} infoData={filterData.carNumber} />
            <DetailInfo text={"차량명"} infoData={filterData.carName} />
            <DetailInfo text={"연식"} infoData={filterData.modelYear} />
            <DetailInfo text={"트림"} infoData={filterData.trim} />
            <DetailInfo text={"모델코드"} infoData={filterData.modelCode} />
            <DetailInfo text={"외장색상"} infoData={filterData.exColor} />
            <DetailInfo text={"내장색상"} infoData={filterData.inColor} />
            <DetailInfo text={"주행거리"} infoData={filterData.mileage} />
          </ul>
        </div>
      </section>
    </>
  );
};
export default Cardetail;
