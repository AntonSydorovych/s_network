import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

export const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    
    return (
        <div className={style.name}>
            <NavLink to = { path } > { props.name } </NavLink>
        </div>
    )
};
