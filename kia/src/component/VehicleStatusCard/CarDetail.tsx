import { useParams } from "react-router";
import { cardData } from "./data/CardData";
import DetailTop from "./subComponent/DetailTop";
import DetailCenter from "./subComponent/DetailCenter";
import DetailInfo from "./subComponent/DetailInfo";
import DeatailButton from "./subComponent/DetailButton";

const Cardetail = () => {
  const { teemo } = useParams(); //URL 읽어주는 친구

  const filterData = cardData.find((v) => {
    return v.id == parseInt(teemo || "0");
  });

  if (!filterData) return <>no Data</>;

  const ButtonText = () => {
    if (filterData.carStatus == "대기") {
      return "인증 검수 시작";
    } else if (filterData.carStatus == "미완료") {
      return "이어서 진행";
    } else {
      return "";
    }
  };

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
        {filterData.carStatus != "완료" ? (
          <DeatailButton
            text={
              filterData.carStatus == "대기" ? "인증 검수 시작" : "이어서 진행"
            }
            status={filterData.carStatus}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};
export default Cardetail;
