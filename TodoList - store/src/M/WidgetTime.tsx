import { useEffect, useState } from "react";

const WidgetTime = () => {
  const [time, setTime] = useState<string[]>([]);

  const updateTime = () => {
    const now = new Date();

    const hours: string = String(now.getHours()).padStart(2, "0");
    const minutes: string = String(now.getMinutes()).padStart(2, "0");
    const seconds: string = String(now.getSeconds()).padStart(2, "0");

    const month: string = String(now.getMonth() + 1).padStart(2, "0");
    const day: string = String(now.getDay() + 1).padStart(2, "0");
    const weeks: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const week: string = weeks[now.getDay()];

    setTime([hours, minutes, seconds, week, month, day]);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const weekColor = () => {
    if (time[3] == "일") {
      return "red";
    } else if (time[3] == "토") {
      return "blue";
    } else return "white";
  };
  const timeBoxCSS = "box flex items-center justify-center h-[100%] p-[3vw]";
  return (
    <div className="box flex flex-col items-center justify-center p-[3vw]">
      <div className={timeBoxCSS} style={{ marginBottom: "2vw" }}>
        <h2 className="text-center text-[5.4vw] w-[250%]">
          {time[0]} : {time[1]} : {time[2]}
        </h2>
      </div>
      <div className="flex gap-[2vw] w-[100%]">
        <div className={timeBoxCSS}>
          <h2 className="text-[2.8vw]" style={{ color: weekColor() }}>
            {time[3]}
          </h2>
        </div>
        <div
          className={timeBoxCSS}
          style={{ flexDirection: "column", width: "100%", marginBottom: "0" }}
        >
          <span className="mb-[0.5vw] text-[2vw]">Month</span>
          <h3 className="text-[2.8vw]">{time[4]}</h3>
        </div>
        <div
          className={timeBoxCSS}
          style={{ flexDirection: "column", width: "100%", marginBottom: "0" }}
        >
          <span className="mb-[0.5vw] text-[2vw]">Day</span>
          <h3 className="text-[2.8vw]">{time[5]}</h3>
        </div>
      </div>
    </div>
  );
};
export default WidgetTime;
