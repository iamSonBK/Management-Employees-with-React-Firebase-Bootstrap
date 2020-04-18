import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSagas from "./root-sagas";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);

export default { store, persistor };
