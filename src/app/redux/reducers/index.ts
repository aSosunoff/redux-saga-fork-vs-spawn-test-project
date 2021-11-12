import { combineReducers } from "redux";

import { peopleReducer } from "../../../feature/people/reducer";

export const createRootReducer = () =>
  combineReducers({
    people: peopleReducer,
  });

export type StateRoot = ReturnType<ReturnType<typeof createRootReducer>>;
