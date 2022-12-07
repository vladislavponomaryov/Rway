const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERCOUNT = 'SET_USERCOUNT';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';

let initialState = {
    users: [],
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5,
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
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setUserCountAC = (userCount) => ({type: SET_USERCOUNT, userCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer;