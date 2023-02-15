import {combineReducers} from "@reduxjs/toolkit";
import profile from "./profile";
import dialogs from "./dialogs";
import sidebar from "./sidebar";
import users from "./users";
import auth from "./auth";
import {reducer as formReducer} from "redux-form";
import app from "./app";
import menu from "./menu"

let reducers = combineReducers({
    profilePage: profile,
    dialogsPage: dialogs,
    sideBar: sidebar,
    usersPage: users,
    auth: auth,
    form: formReducer,
    app: app,
    menu: menu
});

export default reducers