type Level = 1 | 2 | 3 | 4 | 5;
type LineHeght = `${144 | 150 | 156 | 164 | 168}%`;
type LetterSpacing = "-3px";
type FontSize = `${28 | 20 | 18 | 16 | 14 | 13 | 12 | 11}px`;

type HeaderType = `H${Exclude<Level, 4 | 5>}`;
type BodyType = `B${Exclude<Level, "">}`;

type HeaderFontSize = Extract<FontSize, "28px" | "20px" | "18px">;
type BodyFontSize = Exclude<FontSize, HeaderFontSize>;

type HederLineHeight = Extract<LineHeght, "144%" | "150%" | "156%">;
type BodyLineHeight = Exclude<LineHeght, HederLineHeight>;

type HeaderValue = {
  fontSize: HeaderFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: HederLineHeight;
};
type BodyValue = {
  fontSize: BodyFontSize;
  letterSpacing: LetterSpacing;
  lineHeight: BodyLineHeight;
};
type Size<T extends HeaderType | BodyType> = {
  [key in T]: key extends HeaderType ? HeaderValue : BodyValue;
};

export const headerFontStyle: Size<HeaderType> = {
  H1: { fontSize: "28px", letterSpacing: "-3px", lineHeight: "144%" },
  H2: { fontSize: "20px", letterSpacing: "-3px", lineHeight: "150%" },
  H3: { fontSize: "18px", letterSpacing: "-3px", lineHeight: "156%" },
};
export const bodyFontStyle: Size<BodyType> = {
  B1: { fontSize: "16px", letterSpacing: "-3px", lineHeight: "164%" },
  B2: { fontSize: "14px", letterSpacing: "-3px", lineHeight: "168%" },
  B3: { fontSize: "13px", letterSpacing: "-3px", lineHeight: "168%" },
  B4: { fontSize: "12px", letterSpacing: "-3px", lineHeight: "168%" },
  B5: { fontSize: "11px", letterSpacing: "-3px", lineHeight: "168%" },
};
