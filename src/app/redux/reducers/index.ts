import { combineReducers } from "redux";

import { peopleReducer } from "./peopleReducer";

export const createRootReducer = () =>
  combineReducers({
    people: peopleReducer,
  });

export type StateRoot = ReturnType<ReturnType<typeof createRootReducer>>;
