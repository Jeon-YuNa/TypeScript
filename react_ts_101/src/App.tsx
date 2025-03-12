type Sponsoner = "GEN G" | "NONG SIM" | "HAN HWA";
type Team = `${Sponsoner} Team`;
type LCKTEAM = {
  [key in Team]: {
    top: string;
    jg: string;
    mid: string;
    ad: string;
    sp: string;
  };
};
const nongsim: LCKTEAM = {
  "NONG SIM Team": {
    top: "siwoo",
    jg: "lucid",
    mid: "showmaker",
    ad: "aiming",
    sp: "beryl",
  },
};

type Idol = "twice" | "??" | "???";
type JYPEntertainment = `JYP in ${Idol}`;
type JYPIdol = {
  [key in JYPEntertainment]: string[];
};
const jypIdol: JYPIdol = {
  "JYP in twice": [""],
  "JYP in ??": [""],
  "JYP in ???": [""],
};

type ThemeName = "primary" | "secondary" | "warning";
type Color = "black" | "white";
type ColorValue = `${ThemeName} - ${Color}`;
const printColor: ColorValue = "primary - black";

type Green = "Green" | "Green_dark";
type KiaColor = `kia${Green}`;
type HexColor = `#${string}`;
const colors: { [key in KiaColor]: HexColor } = {
  kiaGreen: "#5d7d2b",
  kiaGreen_dark: "#5c5b35",
};
function App() {
  return <></>;
}

export default App;
