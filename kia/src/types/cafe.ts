type Beverage = "coffee" | "nonCoffee" | "ade" | "tea";
type Desert = "bakery" | "cookie";

type Unit = { id: number; name: string };
type WithUnit<T> = Unit & T;

type Item = {
  price: number;
  stocks: number;
  category: Beverage | Desert;
};
type CafeItem = WithUnit<Item>;

type Staff = {
  rank: "Manager" | "PartTime" | "Owner";
  wage: number;
};
type Empolyee = WithUnit<Staff>;

type OperationTime = {
  open: string;
  close: string;
};
type Open24Hour = Omit<OperationTime, keyof OperationTime>;
type RefularOperation = Required<OperationTime>;
type Branch = {
  operation: Open24Hour | RefularOperation;
  staffs: Empolyee[];
  menus: CafeItem[];
};
type Spot = WithUnit<Branch>;

type Size = `${"11" | "12" | "13" | "14" | "16" | "18" | "20" | "28"}px`;
type LineHeight = `${"168" | "164" | "156" | "150" | "144"}%`;
type Level = "1" | "2" | "3" | "4" | "5";

type Hseries = `H${Exclude<Level, "4" | "5">}`;
type Bseries = `B${Level}`;

type font<T extends Hseries | Bseries> = Record<
  T,
  { size: Size; lineHeight: LineHeight }
>;

const Bfont: font<Bseries> = {
  B1: { size: "11px", lineHeight: "168%" },
  B2: { size: "12px", lineHeight: "168%" },
  B3: { size: "13px", lineHeight: "168%" },
  B4: { size: "14px", lineHeight: "168%" },
  B5: { size: "16px", lineHeight: "164%" },
};
const Hfont: font<Hseries> = {
  H1: { size: "28px", lineHeight: "144%" },
  H2: { size: "20px", lineHeight: "150%" },
  H3: { size: "18px", lineHeight: "156%" },
};

export const fontStyle = {
  ...Bfont,
  ...Hfont,
};
