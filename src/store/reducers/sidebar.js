import {usersAPI} from "../../api/api";

let initialState = {
    friends: [
        {name: 'Andrew'},
        {name: 'Sasha'},
        {name: 'Alexander'}
    ],
    newUsers: null
}

const SET_NEW_USERS = "SET_NEW_USERS"

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_USERS:
            return {
                ...state,
                newUsers: action.newUsers
            }
        default:
            return state;
    }
}

const setNewUsers = (newUsers) => ({type: SET_NEW_USERS, newUsers})

export const getNewUsers = () => async (dispatch) => {
    let response = await usersAPI.getUsers(1, 3)

    dispatch(setNewUsers(response.items))
}

export default sidebar;