import React from 'react';
import style from './login.module.css';
import {formsAPI} from '../api/FormsApi'
import {maxLengthOfMessage} from "../utils/validators/validators";
import {loginTC} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    let onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
    }

    let  maxLength20 = maxLengthOfMessage(20);

    if(props.isAuth) return  <Redirect to={'/profile'} />

    return <>
        <h1>LOGIN</h1>
        <formsAPI.login onSubmit = {onSubmit} />
    </>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginContainer = connect(mapStateToProps, {loginTC})(Login);

export default LoginContainer;


