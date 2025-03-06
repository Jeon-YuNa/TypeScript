//제네릭스
type Champ<T, U, V> = {
  name: string;
  position: T;
  hp: U;
  mp: V;
};
const mini: Champ<string, number, boolean> = {
  name: "미니",
  position: "탑",
  hp: 10,
  mp: false,
};

type Hamburger =
  | "햄버거"
  | "불고기버거"
  | "상하이버거"
  | "빅맥버거"
  | "콰트로치즈버거";
type Side = "초코츄러스" | "감자튀김" | "애플파이" | "선데이 아이스크림";
type Drinks = "콜라" | "사이다" | "커피";
type MacMorningBuger = "에그머핀" | "햄치즈 머핀";
type MacMorningSide = "해시브라운" | "초코츄러스";
type MacMorningDrinks = "라떼" | "아메리카노";

//extends 제약
type MacdonaldSet<
  T extends Hamburger | MacMorningBuger,
  U extends Side | MacMorningSide,
  V extends Drinks | MacMorningDrinks
> = {
  main: T;
  side: U;
  drink: V;
};
const a: MacdonaldSet<Hamburger, Side, Drinks> = {
  main: "빅맥버거",
  side: "선데이 아이스크림",
  drink: "커피",
};
const b: MacdonaldSet<MacMorningBuger, MacMorningSide, MacMorningDrinks> = {
  main: "에그머핀",
  side: "해시브라운",
  drink: "아메리카노",
};
