import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { useDispatchError } from "../feature/error/use-dispatch-error";
import { useDispatchPeopleAdd } from "../feature/people/dispatch/use-dispatch-people-add";
import { useDispatchPeopleDelete } from "../feature/people/dispatch/use-dispatch-people-delete";
import { useDispatchPeopleRequest } from "../feature/people/dispatch/use-dispatch-people-request";
import { selectorPeople } from "../feature/people/selectors/selector-people";
import { Person } from "./interfaces/person";

export const App: React.FC = () => {
  const { dispatchPeopleRequest } = useDispatchPeopleRequest();

  const { dispatchPeopleDelete } = useDispatchPeopleDelete();

  const { dispatchPeopleAdd } = useDispatchPeopleAdd();

  const { pageData, loading } = useSelector(selectorPeople);

  const { dispatchError } = useDispatchError();

  return (
    <>
      <button
        onClick={() => {
          dispatchPeopleRequest(1, "");
        }}
      >
        Load People
      </button>

      <button
        onClick={() => {
          const uniq = v4();

          dispatchPeopleAdd({ name: uniq, url: uniq } as Person);
        }}
      >
        App Person
      </button>

      <button onClick={dispatchError}>Error</button>

      {loading ? <>Loading...</> : null}

      {loading
        ? null
        : pageData?.results.map((people) => (
            <div key={people.url}>
              <span>{people.name}</span>
              <span>&nbsp;</span>
              <button
                onClick={() => {
                  dispatchPeopleDelete(people.url);
                }}
              >
                x
              </button>
            </div>
          ))}
    </>
  );
};
