import { Reducer } from "redux";

import { getIdFromUrl } from "../../../getIdFromUrl";
import { PagesType } from "../../interfaces/page-type";
import { Person } from "../../interfaces/person";
import { CreateReducer, CreateAction, Handler } from "./helpers";

type ActionPeople = {
  SET_PEOPLE: { payload: PagesType<Person> };
  ADD_PEOPLE: { payload: Person };
  DELETE_PEOPLE: { payload: Person };
};

export type ActionSetPeople = CreateAction<ActionPeople, "SET_PEOPLE">;
export type ActionAddPeople = CreateAction<ActionPeople, "ADD_PEOPLE">;
export type ActionDeletePeople = CreateAction<ActionPeople, "DELETE_PEOPLE">;

type State = {
  pageData: PagesType<Person> | null;
};

const initialState: State = {
  pageData: null,
};

const handlers: Handler<State, ActionPeople> = {
  SET_PEOPLE: (state, action) => ({ ...state, people: action.payload }),

  ADD_PEOPLE: (state, action) =>
    state.pageData
      ? {
          ...state,
          pageData: {
            ...state.pageData,
            results: [...(state.pageData ? state.pageData.results : []), action.payload],
          },
        }
      : {
          pageData: state.pageData,
        },

  DELETE_PEOPLE: (state, action) =>
    state.pageData
      ? {
          ...state,
          pageData: {
            ...state.pageData,
            results:
              state.pageData?.results.filter(
                ({ url }) => getIdFromUrl(url) !== getIdFromUrl(action.payload.url)
              ) ?? [],
          },
        }
      : { pageData: state.pageData },

  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<State, ActionSetPeople | ActionAddPeople | ActionDeletePeople> =
  (state = initialState, action) => CreateReducer(handlers, state, action);
