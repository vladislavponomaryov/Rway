import React from "react";
import ReduxForm from "redux-form/lib/reduxForm";
import style from './../common/FormsControls/FormsControls.module.css';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/others/validators";
import {Navigate} from "react-router-dom";

const LoginForm = ({handleSubmit,error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email','login',[required],Input)}
            {createField('Password','password',[required],Input,{type:'password'})}
            {createField(null,'rememberMe',null,Input,{type:'checkbox'},"remember me")}

            { captchaUrl && <img src={captchaUrl} alt="captcha"/> }
            { captchaUrl && createField("Symbols from image","captcha",[required],Input)}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = ReduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe, captcha} = formData;
        props.authLogin(login, password, rememberMe, captcha);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

export default Login;