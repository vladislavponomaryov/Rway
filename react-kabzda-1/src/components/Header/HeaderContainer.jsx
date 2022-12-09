import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getAuthUserData().then(response => {
            let {id, email, login} = response;
            this.props.setAuthUserData(id, email, login);
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);