import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input, TextArea} from "../common/textarea/FormControl";
import style from '../Login/login.module.css';


export const formsAPI = {

    login: reduxForm({form: 'login'})((props) => {

       return <form  onSubmit={props.handleSubmit}  >
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate = {required}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       type={"password"}
                       validate = {required}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember Me
            </div>
           <div className={style.formSummaryError}>
               {props.error}
           </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    }),

    post: reduxForm({form: 'post'})((props) => {


        return <form action="" onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Text'} name={'postText'} component={TextArea}
                       validate = {[required, props.maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    }),

    message: reduxForm({form: 'message'})((props) => {

        return <form  onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Text'} name={'messageText'} component={TextArea}
                       validate = {[required, props.maxLength20]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    })


}
