import { createStore,compose } from "redux";
import rootReducer from "./RootReducer";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant';
import thunk from "redux-thunk";


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// add support for redux devtools

let middleware=[logger,reduxImmutableStateInvarient(),thunk];

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)));

export default store;