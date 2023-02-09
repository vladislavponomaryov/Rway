const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    user: string,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Aleksei'},
        {id: 3, name: 'Sanya'}
    ] as Array<DialogType>,
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
    ] as Array<MessageType>
}

type InitialStateType = typeof initialState

const dialog = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 11, user: 'me', message: action.newMessageBody}]
            }
        default:
            return state;
    }
}

type AddMessageType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}
export const addMessage = (newMessageBody: string): AddMessageType => ({type: ADD_MESSAGE, newMessageBody})

export default dialog;