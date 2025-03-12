import TodoList from "./TodoList";
import WidgetTime from "./WidgetTime";
import WidgetWeather from "./WidgetWeather";

function App() {
  return (
    <>
      <section className="flex gap-[2vw]">
        <article className="w-[45%] h-[calc(100vh-5vw)] flex flex-col gap-[2vw]">
          <WidgetWeather />
          <WidgetTime />
        </article>
        <article className="w-[55%] h-[calc(100vh-5vw)]">
          <TodoList />
        </article>
      </section>
    </>
  );
}

export default App;
