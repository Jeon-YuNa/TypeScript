import { CoolGrayColors, SecondaryColors } from "../../../types/Color";
import { Status } from "../type/StatysCardType";

export const stateTextColor: { [key in Status]: string } = {
  대기: SecondaryColors.Green_dark,
  미완료: SecondaryColors.Red_dark,
  완료: CoolGrayColors.Cool_Gray20,
};

export const stateBgColorbj: { [key in Status]: string } = {
  대기: SecondaryColors.Green_light_bg,
  미완료: SecondaryColors.Red_light_bg,
  완료: CoolGrayColors.Cool_Gray5,
};
