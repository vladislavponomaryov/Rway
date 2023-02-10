import {addMessage} from "../../store/reducers/dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../utils/hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

class DialogsContainer extends React.Component {
    render() {
        return <>
            <Dialogs {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

export default compose(
    connect(mapStateToProps,{addMessage}),
    withAuthRedirect
)(DialogsContainer);