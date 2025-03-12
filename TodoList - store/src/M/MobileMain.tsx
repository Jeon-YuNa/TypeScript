import { useMediaQuery } from "react-responsive";
import TodoList from "./TodoList";
import WidgetTime from "./WidgetTime";
import WidgetWeather from "./WidgetWeather";

const MobileMain = () => {
  const isDesktop: boolean = useMediaQuery({
    query: "(max-width:640px)",
  });
  return (
    <>
      <section className="flex gap-[2vw] flex-col p-[4vw]">
        <article
          className="w-[100%] flex gap-[2vw]"
          style={
            isDesktop
              ? { flexDirection: "column", height: "40vh" }
              : { height: "26vh" }
          }
        >
          <WidgetWeather />
          <WidgetTime />
        </article>
        <article
          className="w-[100%]"
          style={isDesktop ? { height: "54vh" } : { height: "66vh" }}
        >
          <TodoList />
        </article>
      </section>
    </>
  );
};

export default MobileMain;
