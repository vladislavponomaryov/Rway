import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (p) => {

    let dialogsElements = p.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);
    let messagesElements = p.messages.map(m => <Message message={m.message} user={m.user} key={m.id} />)

    let newMessage = React.createRef();
    let onUpdateMessageText = () => {
        let text = newMessage.current.value;
        p.updateMessageText(text);
    }

    let onAddMessage = () => {
        p.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.wrapperAddMessage}>
                    <textarea ref={newMessage} className={s.textarea} value={p.messageText} onChange={onUpdateMessageText} name="" id="" cols="50" rows="3" placeholder='New message'></textarea>
                    <div>
                        <button className={s.addMessageBtn} onClick={onAddMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;