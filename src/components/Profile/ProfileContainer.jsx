import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let routUserId = this.props.match.params.userId; // match получает ID из страницы браузера через Router
        let userId = (routUserId) ? routUserId : this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {

        if (!this.props.match.params.userId && !this.props.userId) return <Navigate to={'/login'}/>

        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    store: state.store,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);