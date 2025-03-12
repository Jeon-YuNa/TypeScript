import React, { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { BsCloudSnowFill } from "react-icons/bs";
import { FaCloudBolt } from "react-icons/fa6";
import { BsFillCloudRainFill } from "react-icons/bs";
import { BsFillCloudFog2Fill } from "react-icons/bs";

const WidgetWeather = () => {
  const [weatherImg, setWeatherImg] = useState<React.ReactNode>(null);
  const [temperature, setTemperature] = useState<number | string>("");
  const iconCSS = { width: "16vw", height: "16vw" };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((v) => {
      const { latitude, longitude } = v.coords;
      const apikey = "f5fa108b3082dc5b455edaa7c42c71b0";
      const weatherImage: { [key: string]: React.ReactNode } = {
        Clear: <IoSunny style={iconCSS} />,
        Clouds: <FaCloud style={iconCSS} />,
        Rain: <FaCloudShowersHeavy style={iconCSS} />,
        Snow: <BsCloudSnowFill style={iconCSS} />,
        Thunderstorm: <FaCloudBolt style={iconCSS} />,
        Drizzle: <BsFillCloudRainFill style={iconCSS} />,
        Fog: <BsFillCloudFog2Fill style={iconCSS} />,
      };

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
      )
        .then((response) => response.json())
        .then((v) => {
          console.log(v);
          const temperature = v.main.temp - 273.15;
          const weatherCondition = v.weather[0].main;
          const weatherIcon = weatherImage[weatherCondition] || (
            <IoSunny style={iconCSS} />
          );
          setWeatherImg(weatherIcon);
          setTemperature(temperature.toString()[0]);
        });
    });
  }, []);

  return (
    <div className="box flex items-center justify-center p-[3vw]">
      <div className="box flex flex-col items-end h-[100%] px-[4vw] py-[3vw] justify-center">
        <h2 className="w-full text-[4vw]">
          {temperature}
          <span className="text-[3vw]">°C</span>
        </h2>
        <span>{weatherImg ? weatherImg : "Loading..."}</span>
      </div>
    </div>
  );
};

export default WidgetWeather;
