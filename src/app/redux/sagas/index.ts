import { spawn, call, all } from "redux-saga/effects";
import { peopleRootSaga } from "../../../feature/people/saga";

export function* rootSaga() {
  const sagas = [peopleRootSaga];

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
