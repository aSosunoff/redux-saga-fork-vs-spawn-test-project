import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionError, ERROR } from "./action";

export const useDispatchError = () => {
  const dispatch = useDispatch<Dispatch<ActionError>>();

  const dispatchError = useCallback(() => {
    dispatch({
      type: ERROR,
    });
  }, [dispatch]);

  return { dispatchError };
};
