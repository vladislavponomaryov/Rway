import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = (p) => {

    //let state = p.store.getState();

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let updateMessageText = (body) => {
                        store.dispatch(updateMessageTextActionCreator(body));
                    }

                    return <Dialogs addMessage={addMessage}
                                    updateMessageText={updateMessageText}
                                    messageText={state.dialogsPage.messageText}
                                    dialogs={state.dialogsPage.dialogs}
                                    messages={state.dialogsPage.messages}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;