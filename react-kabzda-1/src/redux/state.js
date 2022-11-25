let store = {
    state: {
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
    rerenderEntireTree: () => {
        console.log('State changed');
    },
    subscribe: (observer) => {
        store.rerenderEntireTree = observer;
    },
    addPost: () => {
        let post = {
            id: 3, message: store.state.profilePage.newPostText, likesCount: 0
        }

        store.state.profilePage.posts.push(post);
        store.state.profilePage.newPostText = '';
        store.rerenderEntireTree(store);
    },
    updatePostText: (text) => {
        store.state.profilePage.newPostText = text;
        store.rerenderEntireTree(store);
    },
    addMessage: () => {
        let newMessage = {
            id: 11,
            user: 'me',
            message: store.state.dialogsPage.messageText
        }

        store.state.dialogsPage.messages.push(newMessage);
        store.state.dialogsPage.messageText = '';
        store.rerenderEntireTree(store);
    },
    updateMessageText: (text) => {
        store.state.dialogsPage.messageText = text;
        store.rerenderEntireTree(store);
    }
}

export default store;