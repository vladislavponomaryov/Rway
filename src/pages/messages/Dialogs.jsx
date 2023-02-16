import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Field from "redux-form/lib/Field";
import ReduxForm from "redux-form/lib/reduxForm";
import {Textarea} from "../../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/others/validators";

const maxLength = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New message'} name={'newMessageBody'} component={Textarea} validate={[required,maxLength]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = ReduxForm({form:'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} user={m.user} key={m.id} />)

    const addNewMessage = (formData) => {
        props.addMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.wrapperAddMessage}>

                    <AddMessageReduxForm onSubmit={addNewMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;