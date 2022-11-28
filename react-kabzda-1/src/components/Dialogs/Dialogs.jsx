import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessage from "./Message/AddMessage/AddMessage";

const Dialogs = (p) => {
    let dialogsElements = p.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = p.state.messages.map(m => <Message message={m.message} user={m.user}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessage messageText={p.state.messageText} dispatch={p.dispatch}/>
            </div>
        </div>
    );
}

export default Dialogs;