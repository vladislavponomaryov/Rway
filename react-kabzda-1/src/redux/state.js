let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
            {id: 2, message: 'Cool', likesCount: 4},
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {name: 'Andrew'},
            {name: 'Sasha'},
            {name: 'Alexander'}
        ]
    }
}

export let addPost = (postMessage) => {

    let post = {
        id: 3, message: postMessage, likesCount: 0
    }

    state.profilePage.posts.push(post);
}

export default state;