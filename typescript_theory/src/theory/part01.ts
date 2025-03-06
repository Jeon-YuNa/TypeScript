//1. 문법
//어노테이션
const a: number = 12;
const b: boolean = true;
const c: string = "수임";
const d: string[] = ["현균", "형준", ""];
const e: number[] = [1, 2, 3];
const f: { name: string; age: number } = {
  name: "홍길동",
  age: 30,
};

const coffee: { price: number; shots: number; isCaffein: boolean }[] = [
  {
    price: 2000,
    shots: 1,
    isCaffein: true,
  },
  {
    price: 2000,
    shots: 1,
    isCaffein: true,
  },
];
const closet: { clothes: string; isFemale: boolean }[] = [
  {
    clothes: "무신사",
    isFemale: true,
  },
];

const add = (x: number, y: number): string => {
  return String(x + y);
};

const re = (x: number[]): number => {
  return x[0];
};

const test: (x: number) => number = (x: number) => {
  return x;
};

//const onClick: (e:Event) => void
