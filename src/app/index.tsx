import React from "react";
import { useSelector } from "react-redux";
import { useDispatchPeopleDelete } from "../feature/people/dispatch/use-dispatch-people-delete";
import { useDispatchPeopleRequest } from "../feature/people/dispatch/use-dispatch-people-request";
import { selectorPeople } from "../feature/people/selectors/selector-people";

export const App: React.FC = () => {
  const { dispatchPeopleRequest } = useDispatchPeopleRequest();

  const { dispatchPeopleDelete } = useDispatchPeopleDelete();

  const { pageData, page, pageSize, loading, search } = useSelector(selectorPeople);

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatchPeopleRequest(1, "");
          }}
        >
          Load People
        </button>
      </div>

      {loading ? <>Loading...</> : null}

      {loading
        ? null
        : pageData?.results.map((people) => (
            <div key={people.url}>
              <span>{people.name}</span>
              <span>&nbsp;</span>
              <button
                onClick={() => {
                  dispatchPeopleDelete(people);
                }}
              >
                x
              </button>
            </div>
          ))}
    </>
  );
};
