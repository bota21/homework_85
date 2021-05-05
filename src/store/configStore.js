import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import artistReducer from "./reducers/artistReducer";
import albumReducer from "./reducers/albumReducer";
import trackReducer from "./reducers/trackReducer";
import userReducer from "./reducers/userReducer";
import axios from "../axios/axiosURL";
import { loadFromLocalStorage, saveToLocalStorage } from "./configLocalStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  artists: artistReducer,
  albums: albumReducer,
  tracks: trackReducer,
  user: userReducer,
  router: connectRouter(history),
});

axios.interceptors.request.use((req) => {
  const users = store.getState().user;
  req.headers["Authentication"] = users.user && users.user.token;
  return req;
});

const middleware = [thunk, routerMiddleware(history)];

const persistedState = loadFromLocalStorage();

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    user: {
      user: store.getState().user.user,
    },
  });
});

export default store;
