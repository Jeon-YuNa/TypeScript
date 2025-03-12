//타입 조합 연산자
// 1. union type [or(|)]
const a: number | string = "10";
const b: (number | boolean)[] = [true, 12];
// ? -> optional : 있어도 되고 없어도 되는
const c: { name: string; price: number; shot?: number; origin?: string }[] = [
  {
    name: "아아",
    price: 2000,
    shot: 2,
  },
  {
    name: "라떼",
    price: 3000,
    origin: "콜롬비아",
  },
];

//2. intersection type [and(&)]
// const d: number & string
const coffee: { name: string; price: number } & { shots: number } = {
  name: "아메리카노",
  price: 2500,
  shots: 3,
};

//타입 알리아스(Type Alias)
//type 별명
type Umm = number | string;
const d: Umm = 1;

type Person = { name: string; age: number };
type Student = { major: string; id: number; courses: string[] };
type Academic = Person & Student;

type CoffeeBean = { origin: string; color: string | number; flavor: string };
type Ade = { sparkling: boolean; kcal: number };
type bread = { ingridents: string[]; yeast: number };
type Product = { name: string; price: number };
const saltBread: bread & Product = {
  ingridents: ["salt"],
  yeast: 10,
  name: "소금빵",
  price: 3000,
};
// const lemon: Ade & Product = {};
// const restuffcoffee: CoffeeBean & Product = {};

//리터럴 타입 알리아스
type Num = 1 | 2 | 3;
type ShesBeagle = "아메리카노" | "라떼" | "민트";

type Bread = "플랫브래드" | "허니오트" | "오레가노" | "위트" | "화이트";
type Cheese = "슈레드" | "아메라칸" | "모짜렐라";
type Vegitable = "양파" | "피망" | "양상추" | "할라피뇨" | "올리브" | "토마토";
type Source =
  | "핫칠리"
  | "허니머스타드"
  | "랜치"
  | "스위트어니언"
  | "후추"
  | "소금";
type Subway = {
  bread: Bread;
  cheese: Cheese;
  vegitable: Vegitable[];
  sources: Source[];
};
const myOrder: Subway = {
  bread: "위트",
  cheese: "모짜렐라",
  vegitable: ["양상추", "양파", "토마토"],
  sources: ["핫칠리", "허니머스타드"],
};

type menu =
  | "햄버거"
  | "불고기버거"
  | "상하이버거"
  | "빅맥버거"
  | "콰트로치즈버거";
type side = "초코츄러스" | "감자튀김" | "애플파이" | "선데이 아이스크림";
type drink = "콜라" | "사이다" | "커피";
type macnal = {
  menu: menu;
  side: side;
  drink: drink;
};
const macnalOrder: macnal = {
  menu: "상하이버거",
  side: "감자튀김",
  drink: "콜라",
};
