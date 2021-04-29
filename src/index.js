import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./containers/Main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import artistReducer from "./store/reducers/artistReducer";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerMiddleware,
  connectRouter,
} from "connected-react-router";
import { createBrowserHistory } from "history";
import albumReducer from "./store/reducers/albumReducer";
import trackReducer from "./store/reducers/trackReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const rootReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer,
  router: connectRouter(history),
});

const middleware = [thunk, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
