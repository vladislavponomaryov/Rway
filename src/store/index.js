import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profile from "./reducers/profile";
import dialogs from "./reducers/dialogs";
import sidebar from "./reducers/sidebar";
import users from "./reducers/users";
import auth from "./reducers/auth";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import app from "./reducers/app";

let reducers = combineReducers({
    profilePage: profile,
    dialogsPage: dialogs,
    sideBar: sidebar,
    usersPage: users,
    auth: auth,
    form: formReducer,
    app: app
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let index = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = index;

export default index;