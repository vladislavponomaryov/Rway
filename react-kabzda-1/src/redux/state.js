import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
                {id: 2, message: 'Cool', likesCount: 4},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Aleksei'},
                {id: 3, name: 'Sanya'}
            ],
            messages: [
                {id: 1, user: 'me', message: 'Hello'},
                {id: 2, user: 'companion', message: 'Hi'},
                {id: 3, user: 'me', message: 'How are you?'},
                {id: 4, user: 'companion', message: 'I\'m alright, how are you too?'},
                {id: 5, user: 'me', message: 'Fine'},
                {id: 6, user: 'companion', message: 'Whats are you doing?'},
                {id: 7, user: 'me', message: 'I\'m play football, and you?'},
                {id: 8, user: 'companion', message: 'I\'m relaxing'},
                {id: 9, user: 'me', message: 'Cool, bye'},
                {id: 10, user: 'companion', message: 'Bye'}
            ],
            messageText: ''
        },
        sidebar: {
            friends: [
                {name: 'Andrew'},
                {name: 'Sasha'},
                {name: 'Alexander'}
            ]
        }
    },
    _CallSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._CallSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._CallSubscriber(this._state);
    }
}

export default store;

window.store = store;