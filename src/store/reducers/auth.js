import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'samurai-network/auth/SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, the captcha is not required
}

const auth = (state = initialState, action) => {

    switch (action.type) {
        case SET_CAPTCHA_URL:
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl},
})

export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL,payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true, null));
    }

}

export const authLogin = (login, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {

        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const authLogout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl));
}

export default auth;