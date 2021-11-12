import { PagesType } from "../../app/interfaces/page-type";
import { Person } from "../../app/interfaces/person";
import { CreateAction } from "../../app/redux/reducers/helpers";

export const PEOPLE_REQUEST = "PEOPLE_REQUEST";
export type dispatchPeopleRequest = typeof PEOPLE_REQUEST;
export type ActionPeopleRequest = CreateAction<ActionPeople, dispatchPeopleRequest>;

export const PEOPLE_SUCCESS = "PEOPLE_SUCCESS";
export type dispatchPeopleSuccess = typeof PEOPLE_SUCCESS;
export type ActionPeopleSuccess = CreateAction<ActionPeople, dispatchPeopleSuccess>;

export const PEOPLE_FAILURE = "PEOPLE_FAILURE";
export type dispatchPeopleFailure = typeof PEOPLE_FAILURE;
export type ActionPeoleFailure = CreateAction<ActionPeople, dispatchPeopleFailure>;

export const PEOPLE_DELETE = "PEOPLE_DELETE";
export type dispatchPeopleDelete = typeof PEOPLE_DELETE;
export type ActionPeoleDelete = CreateAction<ActionPeople, dispatchPeopleDelete>;

export type ActionPeople = {
  [PEOPLE_REQUEST]: {
    payload: {
      page: number;
      search: string;
    };
  };

  [PEOPLE_SUCCESS]: { payload: PagesType<Person> };

  [PEOPLE_FAILURE]: { payload: any };

  [PEOPLE_DELETE]: { payload: Person };
};

/* type ActionPeople = {
  SET_PEOPLE: { payload: PagesType<Person> };
  ADD_PEOPLE: { payload: Person };
  
}; */

/* export type ActionSetPeople = CreateAction<ActionPeople, "SET_PEOPLE">;
export type ActionAddPeople = CreateAction<ActionPeople, "ADD_PEOPLE">;
export type ActionDeletePeople = CreateAction<ActionPeople, "DELETE_PEOPLE">; */
