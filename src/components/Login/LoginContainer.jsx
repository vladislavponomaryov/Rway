import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {authLogin} from "../../store/reducers/auth";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps,{authLogin})(LoginContainer);