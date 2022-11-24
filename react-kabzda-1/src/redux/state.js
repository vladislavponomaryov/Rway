let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const addPost = () => {
    let post = {
        id: 3, message: state.profilePage.newPostText, likesCount: 0
    }

    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updatePostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 11,
        user: 'me',
        message: state.dialogsPage.messageText
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.messageText = '';
    rerenderEntireTree(state);
}

export const updateMessageText = (text) => {
    state.dialogsPage.messageText = text;
    rerenderEntireTree(state);
}

export default state;