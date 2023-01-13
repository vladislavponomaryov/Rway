import React from "react";
import Friendbar from "./Friendbar";
import {connect} from "react-redux";

const FriendbarContainer = (props) => {
    return <Friendbar {...props} />
}

let mapStateToProps = (state) => ({
    friends: state.sideBar.friends
})

export default connect(mapStateToProps,null)(FriendbarContainer)