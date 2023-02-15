import {configureStore} from "@reduxjs/toolkit";
import {compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "./reducers";

let store = configureStore({
    reducer: reducers,
    middleware: [thunkMiddleware],
    enhancers: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
});

export default store;