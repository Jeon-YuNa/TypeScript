import { useState } from "react";
import { cardData } from "../component/VehicleStatusCard/data/CardData";
import Card from "../component/VehicleStatusCard/Card";
import Tab from "../component/VehicleStatusCard/Tab";
import { Status } from "../component/VehicleStatusCard/subComponent/TabButton";

const Inspection = () => {
  const [isSelect, setIsSelect] = useState<Status>("진행대기");
  const wait = () => setIsSelect("진행대기");
  const complate = () => setIsSelect("완료");

  return (
    <>
      <section style={{ width: "640px", margin: "0 auto" }}>
        <Tab wait={wait} complate={complate} isSelect={isSelect} />
        {cardData
          .filter((v) =>
            isSelect == "완료" ? v.carStatus == "완료" : v.carStatus != "완료"
          )
          .map((v) => (
            <Card {...v} />
          ))}
      </section>
    </>
  );
};

export default Inspection;
