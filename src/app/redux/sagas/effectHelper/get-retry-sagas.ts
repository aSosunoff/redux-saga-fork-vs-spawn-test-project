import { spawn, call } from "redux-saga/effects";

export const getRetrySagas = <T extends Array<() => Generator>>(...sagas: T) =>
  sagas.map((saga) =>
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
