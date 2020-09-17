import React from 'react';
import style from './Dialogs.module.css';

import {formsAPI} from "../api/FormsApi";
import {maxLengthOfMessage} from "../utils/validators/validators";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    let usersElements = props.users.map(u =>
        <DialogItem id={u.id} name={u.name} key={u.id} />)

    let messageElements = props.messages.map(m =>
        <Message message={m.message} key={m.id} />);


    let sendMessage = (values) => {
        props.sendMessage(values.messageText);
    }

    let  maxLength20 = maxLengthOfMessage(20);

    return (
        <div className={style.allPage}>
            <div className={style.allNames}>
                {usersElements}
            </div>
            <div className={style.allMessages}>
                {messageElements}
                <formsAPI.message onSubmit = {sendMessage} maxLength20 = {maxLength20}/>
            </div>
        </div>
    )
}