import { Dispatch, SetStateAction } from "react";
import { IQueries } from "./QueryTypes";

export interface IContext {
  noFilterQuery: IQueries;
  filter: IQueries;
  setFilter: Dispatch<SetStateAction<IQueries>>;
  userQueries: IQueries;
  setUserQueries: Dispatch<SetStateAction<IQueries>>;
  handleQueryInput: (category: string, value: string | number) => void;
}
