import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';


export const Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        {pages.map(p => {
            return <span className={styles.pages}>
                <span className={props.currentPage === p && styles.currentPage} onClick={() => { props.onPageChanged(p) }} >{p}</span>
            </span>
        })}

        {props.users.map(u => {
            return <div className={styles.simpleUser}>
                <NavLink to={'/profile/' + u.id} >
                    <img src={u.photos.small || props.userImg} />
                </NavLink>
                <div>
                    {u.followed ? <button disabled={props.toggleIsFollowing.some(id => id === u.id)} onClick={() => {

                        props.unfollow(u.id)

                    }}>Unfollow</button> :
                        <button disabled={props.toggleIsFollowing.some(id => id === u.id)} onClick={() => {

                            props.follow(u.id)

                        }}>Follow</button>}
                </div>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </div>
        })}
    </div>

}