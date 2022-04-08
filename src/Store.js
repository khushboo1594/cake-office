import { createStore } from "redux";
import cakeReducer from "./Reducer";

export const store=createStore(cakeReducer);