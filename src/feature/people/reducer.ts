import { Reducer } from "redux";

import { PagesType } from "../../app/interfaces/page-type";
import { Person } from "../../app/interfaces/person";
import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";

import { ActionPeople, PEOPLE_FAILURE, PEOPLE_REQUEST, PEOPLE_SUCCESS } from "./action";

type State = {
  pageData: PagesType<Person> | null;
  page: number;
  pageSize: number;
  search: string;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: State = {
  pageData: null,
  page: 1,
  pageSize: 10,
  search: "",
  loading: false,
  error: null,
};

const handlers: Handler<State, ActionPeople> = {
  [PEOPLE_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),

  [PEOPLE_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),

  [PEOPLE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    pageData: action.payload,
  }),

  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<State, any> = (state = initialState, action) =>
  CreateReducer(handlers, state, action);
