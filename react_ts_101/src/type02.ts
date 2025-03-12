type Lunch = {
  name: string;
  price: number;
  kcal: number;
};

type keyLunch = keyof Lunch;

type Size = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

type keySize = keyof Size;

const test: keyLunch = "price";
const test1: keySize = "md";

const fontStyle: { size: keySize; color: "red" | "blue" | "green" } = {
  size: "lg",
  color: "blue",
};

type Order = {
  first: string;
  second: string;
  thrid: string;
};
//keyof 연산자
type A = keyof Order;

// 인덱스드 타입
type B = Order["first"];

//인덱스드 시그니처 타입
type Coffee = {
  [key: string]: string | number;
};

type Sandwich = {
  [key: string]: { name: string; price: number; kcal: number };
};

// 1. keyof: 키값들을 상수화
// 2. 인덱스 타입: 벨류값들을 타입
// 3. 인덱스 시그니처: 키값을 타입화
// -1. string, number만 가능
// 4. 맵드 타입: key in Type

type Hseries = "h1" | "h2" | "h3";
type Bseries = "b1" | "b2" | "b3";

type a = {
  [key in Hseries | Bseries]: 28 | 20 | 18 | 16 | 14 | 12;
};
const b: a = {
  b1: 12,
  b2: 14,
  b3: 16,
  h1: 18,
  h2: 20,
  h3: 28,
};
