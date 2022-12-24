import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'ADD-POST';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export const authLogin = (login, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(login, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
    }
}

export const authLogout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null, false));
            }
        })
    }
}

export default authReducer;