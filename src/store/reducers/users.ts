import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/other/object-helpers";
import {UsersType} from "../../utils/ts/mainTypes";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERCOUNT = 'SET_USERCOUNT';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UsersType>,
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5,
    toggleIsFetching: true,
    followingInProgress: [] as Array<number>  // array of users id
}

type InitialStateType = typeof initialState

const users = (state = initialState, action: any): InitialStateType => {

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
                users: updateObjectInArray(state.users,action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
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

export const setUsers = (users: UsersType) => ({type: SET_USERS, users})
export const setUserCount = (userCount: number) => ({type: SET_USERCOUNT, userCount})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENTPAGE, currentPage})
export const followSuccess = (userId: number) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_ISFETCHING, toggleIsFetching: isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    let response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsers(response.items));
    dispatch(setUserCount(response.totalCount));
    dispatch(toggleIsFetching(false));
}

export const follow = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export default users;