import React from 'react';
import s from './AddMessage.module.css';

const AddMessage = (p) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        p.addMessage();
    }

    let updateMessageText = () => {
        p.updateMessageText(newMessage.current.value);
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