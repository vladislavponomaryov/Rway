import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERCOUNT = 'SET_USERCOUNT';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5,
    toggleIsFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_USERCOUNT:
            return {
                ...state,
                totalUserCount: action.userCount
            }
        case SET_CURRENTPAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_ISFETCHING:
            return {
                ...state,
                toggleIsFetching: action.toggleIsFetching
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setUserCount = (userCount) => ({type: SET_USERCOUNT, userCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, toggleIsFetching: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setUserCount(response.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;