import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Person } from "../../../app/interfaces/person";
import { ActionPeoleAdd, PEOPLE_ADD } from "../action";

export const useDispatchPeopleAdd = () => {
  const dispatch = useDispatch<Dispatch<ActionPeoleAdd>>();

  const dispatchPeopleAdd = useCallback(
    (person: Person) => {
      dispatch({
        type: PEOPLE_ADD,
        payload: person,
      });
    },
    [dispatch]
  );

  return { dispatchPeopleAdd };
};
