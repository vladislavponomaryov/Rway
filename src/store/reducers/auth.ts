import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'samurai-network/auth/SET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, the captcha is not required
}

export type InitialStateType = typeof initialState

const auth = (state = initialState, action:any): InitialStateType => {

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

type SetAuthUserDataPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}
type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: SetAuthUserDataPayloadType
}
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean, captchaUrl:string | null): SetAuthUserDataType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth, captchaUrl}
})

type SetCaptchaUrl = {
    type: typeof SET_CAPTCHA_URL,
    payload: {captchaUrl: string | null}
}
export const setCaptchaUrl = (captchaUrl:string | null): SetCaptchaUrl => ({type: SET_CAPTCHA_URL,payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true, ''));
    }
}

export const authLogin = (login:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
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

export const authLogout = () => async (dispatch:any) => {
    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null));
    }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl));
}

export default auth;