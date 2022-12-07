const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERCOUNT = 'SET_USERCOUNT';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    totalUserCount: 0,
    pageSize: 5,
    toggleIsFetching: true,
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
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setUserCount = (userCount) => ({type: SET_USERCOUNT, userCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, toggleIsFetching: isFetching})

export default usersReducer;