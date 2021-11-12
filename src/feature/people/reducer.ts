import { Reducer } from "redux";

import { PagesType } from "../../app/interfaces/page-type";
import { Person } from "../../app/interfaces/person";
import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";

import {
  ActionPeoleFailure,
  ActionPeople,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  PEOPLE_ADD,
  PEOPLE_DELETE,
  PEOPLE_FAILURE,
  PEOPLE_REQUEST,
  PEOPLE_SUCCESS,
} from "./action";

type State = {
  pageData: PagesType<Person> | null;
  newPerson: Person | null;
  deletePerson: Person | null;
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
  newPerson: null,
  deletePerson: null,
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

  [PEOPLE_DELETE]: (state, action) => ({
    ...state,
    deletePerson: action.payload,
  }),

  [PEOPLE_ADD]: (state, action) => ({
    ...state,
    newPerson: action.payload,
  }),

  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<
  State,
  ActionPeopleRequest | ActionPeopleSuccess | ActionPeoleFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
