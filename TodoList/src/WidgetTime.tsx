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
    } else if (time[3] == "토토") {
      return "blue";
    } else return "white";
  };
  const timeBoxCSS = "box flex items-center justify-center mb-[20px]";
  return (
    <div className="box h-[60%] flex flex-col items-center justify-center">
      <div className={timeBoxCSS}>
        <h2 className="text-center text-[3vw]">
          {time[0]} : {time[1]} : {time[2]}
        </h2>
      </div>
      <div className={timeBoxCSS}>
        <h2 className="text-[2vw]" style={{ color: weekColor() }}>
          {time[3]}
        </h2>
      </div>
      <div className="flex gap-[1vw] w-[100%]">
        <div
          className={timeBoxCSS}
          style={{ flexDirection: "column", width: "100%", marginBottom: "0" }}
        >
          <span className="mb-[0.5vw]">Month</span>
          <h3 className="text-[2vw]">{time[4]}</h3>
        </div>
        <div
          className={timeBoxCSS}
          style={{ flexDirection: "column", width: "100%", marginBottom: "0" }}
        >
          <span className="mb-[0.5vw]">Day</span>
          <h3 className="text-[2vw]">{time[5]}</h3>
        </div>
      </div>
    </div>
  );
};
export default WidgetTime;
