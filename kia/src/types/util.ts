type Top = "Tanker" | "Bruiser";
type Jungle = "Tanker" | "Bruiser" | "Magic";
type Mid = "Utility" | "Bruiser" | "Magic";
type AD = "AD";
type SP = "Utility" | "Healer";

type LOL = {
  top: Top;
  jg: Jungle;
  mid: Mid;
  ad: AD;
  sp: SP;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
//1. Pick 뽑기
type A = Pick<User, "id" | "name">;
//2. Omit 삭제
type B = Omit<User, "password">;
// 3. Partial (모두 옵셔널)
type C = Partial<User>;
// 이름과 이메일이 옵셔널한 타입
type test = Partial<Omit<User, "id" | "password">>;
//4. Required(모두 필수)
type D = Required<Partial<User>>;
//5. Record
type Member = "User" | "Admin" | "SuperAdmin";
type E = Partial<Record<Member, number | string>>;
//User들의 key, value는 boolean
type test1 = Partial<Record<keyof User, boolean>>;
//6. Exclude
type F = Exclude<number | string | boolean, boolean>;
type G = Extract<number | string | boolean, boolean>;

//1. 키오브
type Position = keyof LOL;
//2. 인덱스
type TopIndex = LOL["top"];
//3. 인덱스 시그니처
type Test = {
  [key: string]: string;
};
//4.
type Test1 = {
  [key in Mid]: string;
};

type Level = 1 | 2 | 3 | 4 | 5;
type HeaderSize = `H${Exclude<Level, 4 | 5>}`;
type BodySize = `B${Exclude<Level, "">}`;

type FontSize = `${28 | 20 | 18 | 16 | 14 | 13 | 12 | 11}px`;
type HeaderFontSize = Extract<FontSize, "28px" | "20px" | "18px">;
type BodyFontSize = Exclude<FontSize, HeaderFontSize>;

type LineHeight = `${168 | 164 | 156 | 150 | 144}%`;
type HeaderLineHeight = Extract<LineHeight, "144%" | "150%" | "156%">;
type BodyLineHeight = Exclude<LineHeight, HeaderLineHeight>;
type LetterSpacing = -3;

type HeaderValue = {
  fontSize: HeaderFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: HeaderLineHeight;
};

type BodyValue = {
  fontSize: BodyFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: BodyLineHeight;
};

type Size<T extends HeaderSize | BodySize> = {
  [key in T]: key extends HeaderSize ? HeaderValue : BodyValue;
};

const headerFont: Size<HeaderSize> = {
  H1: { fontSize: "28px", letterSpacing: -3, lineHeight: "144%" },
  H2: { fontSize: "20px", letterSpacing: -3, lineHeight: "150%" },
  H3: { fontSize: "18px", letterSpacing: -3, lineHeight: "156%" },
};

const bodyFont: Size<BodySize> = {
  B1: { fontSize: "16px", letterSpacing: -3, lineHeight: "164%" },
  B2: { fontSize: "14px", letterSpacing: -3, lineHeight: "168%" },
  B3: { fontSize: "13px", letterSpacing: -3, lineHeight: "168%" },
  B4: { fontSize: "12px", letterSpacing: -3, lineHeight: "168%" },
  B5: { fontSize: "11px", letterSpacing: -3, lineHeight: "168%" },
};
