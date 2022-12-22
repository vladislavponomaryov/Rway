import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 11; // match получает ID из страницы браузера через Router
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {

        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    store: state.store,
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);