import React from 'react';
import {logoPic} from '../../Assets/iconLink';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logoPic} />
            <div className={style.authInfo}>
                {!props.isAuth? <NavLink to='/login' activeClassName={style.active}>
                    Login
                </NavLink> : <div><span>{props.login}</span><span>
                    <button onClick={props.logOutTC} >Log out</button></span></div> }
            </div>
        </header>

    )
}