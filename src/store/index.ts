import {
  createStore, applyMiddleware, compose, Middleware, Action,
} from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk, { ThunkAction } from "redux-thunk";
import history from "./history";
import reducers, { RootState } from "./reducers";

const middlewares: Middleware[] = [
  routerMiddleware(history),
  thunk,
];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
