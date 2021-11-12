import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Person } from "../../../app/interfaces/person";
import { ActionPeoleDelete, PEOPLE_DELETE } from "../action";

export const useDispatchPeopleDelete = () => {
  const dispatch = useDispatch<Dispatch<ActionPeoleDelete>>();

  const dispatchPeopleDelete = useCallback(
    (person: Person) => {
      dispatch({
        type: PEOPLE_DELETE,
        payload: person,
      });
    },
    [dispatch]
  );

  return { dispatchPeopleDelete };
};
