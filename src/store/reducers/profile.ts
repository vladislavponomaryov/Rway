import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {PhotoType, PostsType, ProfileType } from "../../utils/ts/mainTypes";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
        {id: 2, message: 'Cool', likesCount: 4}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: ''
}

type InitialStateType = typeof initialState

const profile = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostBody, likesCount: 0}]
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody: string) => ({type: ADD_POST, newPostBody})
export const setProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const deletePost = (postId: number) => ({type: DELETE_POST, postId})
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotoType
}
export const savePhotoSuccess = (photos: PhotoType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setProfile(response));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)

    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)

    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}));
        /*return Profile.reject(response.messages[0]);*/
    }
}

export default profile;