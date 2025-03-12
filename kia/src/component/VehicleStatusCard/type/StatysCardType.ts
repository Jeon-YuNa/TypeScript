export type NameProps = {
  carName: string;
};

export type NumberProps = {
  carNumber: string;
};

export type Status = "완료" | "대기" | "미완료";
export type StatusProps = {
  carStatus: Status;
};
export type CardProps = NameProps &
  NumberProps &
  StatusProps & {
    id: number;
    img: string;
    modelYear: string;
    trim: string;
    modelCode: string;
    exColor: string;
    inColor: string;
    mileage: string;
  };
