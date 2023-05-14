import { createContext } from "react";
import { IContext } from "../types/ContextTypes";

const MyContext = createContext<IContext | null>(null);

export default MyContext;
