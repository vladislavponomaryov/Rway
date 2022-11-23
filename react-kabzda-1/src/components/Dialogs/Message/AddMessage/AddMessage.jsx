import React from 'react';
import s from './AddMessage.module.css';

const AddMessage = () => {

    let newMessage = React.createRef();

    let eventAddMessage = () => {
        alert(newMessage.current.value);
    }

    return (
        <div className={s.wrapperAddMessage}>
            <textarea ref={newMessage} className={s.textarea} name="" id="" cols="50" rows="3"></textarea>
            <div>
                <button className={s.addMessageBtn} onClick={eventAddMessage}>Add</button>
            </div>
        </div>
    )
}

export default AddMessage;