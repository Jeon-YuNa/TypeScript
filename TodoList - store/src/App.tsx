import PcMain from "./PC/PcMain";
import MobileMain from "./M/MobileMain";
import { useMediaQuery } from "react-responsive";
import React from "react";

function App() {
  const isDesktop: boolean = useMediaQuery({
    query: "(max-width:960px)",
  });
  return <>{isDesktop ? <MobileMain /> : <PcMain />}</>;
}

export default App;
