import React from 'react';
import s from './AddMessage.module.css';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../../redux/state";

const AddMessage = (p) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        p.dispatch(addMessageActionCreator());
    }

    let updateMessageText = () => {
        let text = newMessage.current.value;
        p.dispatch(updateMessageTextActionCreator(text));
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