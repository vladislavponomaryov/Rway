import React from 'react';
import s from './AddMessage.module.css';

const AddMessage = (p) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        p.dispatch({ type: 'ADD-MESSAGE' });
    }

    let updateMessageText = () => {
        let text = newMessage.current.value;
        p.dispatch({ type: 'UPDATE-MESSAGE-TEXT', text: text });
    }

    return (
        <div className={s.wrapperAddMessage}>
            <textarea ref={newMessage} className={s.textarea} value={p.messageText} onChange={updateMessageText} name="" id="" cols="50" rows="3" placeholder='New message'></textarea>
            <div>
                <button className={s.addMessageBtn} onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}

export default AddMessage;