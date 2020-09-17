import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>
                    Dialogs
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>
                    Users
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>
                    Music
                </NavLink>
            </div>
            <div className={`${style.item} ${style.settings}`}>
                <NavLink to='/settings' activeClassName={style.active}>
                    Settings
                </NavLink>
            </div>
        </div>
    )
}