import React from "react";
import { useDispatchPeopleRequest } from "../feature/people/dispatch/use-dispatch-people-request";

export const App: React.FC = () => {
  const { dispatchPeopleRequest } = useDispatchPeopleRequest();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatchPeopleRequest(1, "");
          }}
        >
          Load Planets
        </button>

        <button onClick={() => {}}>Load All Planets</button>
      </div>
    </>
  );
};
