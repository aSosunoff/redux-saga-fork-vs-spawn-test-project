import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { createRootReducer } from "./reducers";
import { rootSaga } from "./sagas";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(sagaMiddleware);

  const store = createStore(createRootReducer(), composeWithDevTools(enhancer));

  sagaMiddleware.run(rootSaga);

  return store;
};
