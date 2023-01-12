import reducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
const enhancer = applyMiddleware(thunk)
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers(enhancer))
export default store