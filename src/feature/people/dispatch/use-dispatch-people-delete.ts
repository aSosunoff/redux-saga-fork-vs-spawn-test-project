import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPeoleDelete, PEOPLE_DELETE } from "../action";

export const useDispatchPeopleDelete = () => {
  const dispatch = useDispatch<Dispatch<ActionPeoleDelete>>();

  const dispatchPeopleDelete = useCallback(
    (id: string) => {
      dispatch({
        type: PEOPLE_DELETE(id),
      });
    },
    [dispatch]
  );

  return { dispatchPeopleDelete };
};
