const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 11,
                user: 'me',
                message: state.messageText
            }

            state.messages.push(newMessage);
            state.messageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.text;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text })

export default dialogsReducer;