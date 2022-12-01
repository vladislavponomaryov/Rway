import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (p) => {

    let state = p.store.getState();

    let addMessage = () => {
        p.store.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (body) => {
        p.store.dispatch(updateMessageTextActionCreator(body));
    }

    return (
        <Dialogs addMessage={addMessage}
                 updateMessageText={updateMessageText}
                 messageText={state.dialogsPage.messageText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
        />
    );
}

export default DialogsContainer;