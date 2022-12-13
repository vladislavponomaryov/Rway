import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
        {id: 2, message: 'Cool', likesCount: 4}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, message: state.newPostText, likesCount: 0}]
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case UPDATE_POST_TEXT:
            return  {
                ...state,
                newPostText: action.text
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        let id = (userId) ? userId : 11;
        profileAPI.getProfileData(id).then(response => {
            dispatch(setProfile(response));
        })
    }
}

export default profileReducer;