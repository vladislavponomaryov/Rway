import React from "react";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 11;
        profileAPI.getProfile(userId).then(response => {
            this.props.setProfile(response);
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 11;
        profileAPI.getProfile(userId).then(response => {
            this.props.setProfile(response);
        })
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
    setProfile
})(withRouter(ProfileContainer));