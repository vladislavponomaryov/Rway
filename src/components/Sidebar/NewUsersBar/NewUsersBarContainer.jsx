import React from "react";
import {connect} from "react-redux";
import NewUsersBar from "./NewUsersBar";
import {getNewUsers} from "../../../store/reducers/sidebar";

const NewUsersBarContainer = (props) => {

    if (!props.newUsers) {
        props.getNewUsers()
    }

    return (
        <NewUsersBar {...props}/>
    )
}

const mapStateToProps = (state) => ({
    newUsers: state.sideBar.newUsers
})

export default connect(mapStateToProps,{getNewUsers})(NewUsersBarContainer)