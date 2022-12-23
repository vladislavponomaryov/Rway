import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
        {id: 2, message: 'Cool', likesCount: 4}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, message: action.newPostBody, likesCount: 0}]
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                debugger
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;