import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import counterReducer from "./counter/index";
import homeReducer from "./home/index";

// 使用thunk中间件
const enhancer = applyMiddleware(thunk)
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// 合并reducer
const reducer = combineReducers({
    counter: counterReducer,
    home: homeReducer
})

const store = createStore(reducer, composeEnhancers(enhancer))
export default store