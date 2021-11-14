import { spawn, fork, call, all } from "redux-saga/effects";
import { errorRootSaga } from "../../../feature/error/error-root-saga";
import { peopleRootSaga } from "../../../feature/people/saga";

export function* rootSaga() {
  const sagas = [peopleRootSaga, errorRootSaga];

  const retrySagas = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error: any) {
          console.log(error);
        }
      }
    })
  );

  yield all(retrySagas);
}

/* export function* rootSaga() {
  yield all([fork(peopleRootSaga), fork(errorRootSaga)]);
} */

/* export function* rootSaga() {
  const sagas = [peopleRootSaga, errorRootSaga];

  const retrySagas = sagas.map((saga) =>
    fork(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error: any) {
          console.log(error);
        }
      }
    })
  );

  yield all(retrySagas);
} */

/* export function* rootSaga() {
  yield all([spawn(peopleRootSaga), spawn(errorRootSaga)]);
} */
