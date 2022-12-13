import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId); // match отображает профиль пользователя со страницы User
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.getUserProfile(this.props.match.params.userId); // match отображает профиль пользователя со страницы User
    }
    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    store: state.store,
    profile: state.profilePage.profile
})

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

export default connect(mapStateToProps,{
    getUserProfile
})(withRouter(ProfileContainer));