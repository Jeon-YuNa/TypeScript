type fakerAPI<T> = {
  status: "OK" | "Error";
  code: 200 | 400 | 500;
  locale: string;
  seed: number | null;
  total: number;
  data: T[];
};

type books = {
  id: string;
  title: string;
  author: string;
  description: string;
};
type creditcard = {
  type: string;
  number: number;
  expiration: string;
  owner: string;
};
const test: fakerAPI<books> = {
  status: "OK",
  code: 200,
  locale: "KO",
  total: 1,
  data: [{ author: "sdfsdf", description: "dfsdfs", id: "1", title: "dfsfds" }],
};
const test1: fakerAPI<creditcard> = {
  status: "OK",
  code: 200,
  locale: "KO",
  total: 1,
  data: [
    { expiration: "4344", number: 343423432, owner: "wrwer", type: "fdfd" },
  ],
};
