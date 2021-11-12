import { take, cancel, fork } from "redux-saga/effects";
import { ActionPattern, Task } from "@redux-saga/types";

export function* takeLatestAbort<P extends ActionPattern>(
  pattern: P,
  worker: (signal?: RequestInit["signal"]) => any
) {
  let task: Task = undefined as any;

  let abortController = new AbortController();

  while (true) {
    yield take(pattern);

    if (task) {
      abortController.abort();

      yield cancel(task);

      abortController = new AbortController();
    }

    task = yield fork(worker, abortController.signal);
  }
}
