type colorBlack = "Black";
type colorWhite = "White";
type colorGreen =
  | "Green"
  | "Green_dark"
  | "Green_variant"
  | "Green_light_keybox"
  | "Green_light_bg";
type colorRed = "Red" | "Red_dark" | "Red_light_tag" | "Red_light_bg";
type grayStep = 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5;
type HexColor = `#${string}`;

type PrimaryColor = colorBlack | colorWhite;
type SecondaryColor = colorGreen | colorRed;
type CoolGrayColor = `Cool_Gray${grayStep}`;
type colorlabel<T extends PrimaryColor | SecondaryColor | CoolGrayColor> = {
  [key in T]: HexColor;
};

export const PrimaryColors: colorlabel<PrimaryColor> = {
  Black: "#05141f",
  White: "#ffffff",
};
export const SecondaryColors: colorlabel<SecondaryColor> = {
  Green: "#5d7d2b",
  Green_dark: "#4c5b35",
  Green_variant: "#589000",
  Green_light_keybox: "#daedbd",
  Green_light_bg: "#f5fdeb",
  Red: "#ea0029",
  Red_dark: "#7d4c55",
  Red_light_bg: "#fee9ec",
  Red_light_tag: "#fff5f6",
};
export const CoolGrayColors: colorlabel<CoolGrayColor> = {
  Cool_Gray90: "#1e2c35",
  Cool_Gray80: "#37434c",
  Cool_Gray70: "#505b62",
  Cool_Gray60: "#697279",
  Cool_Gray50: "#82898f",
  Cool_Gray40: "#9ba1a5",
  Cool_Gray30: "#b4b9bc",
  Cool_Gray20: "#cdd0d2",
  Cool_Gray10: "#e6e7e9",
  Cool_Gray5: "#f2f4f6",
};
