import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bounty from "./bounty";

const rootReducer = (combineReducers({ bounty }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;