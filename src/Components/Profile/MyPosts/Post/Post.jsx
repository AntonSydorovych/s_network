import React from 'react';
import style from './Post.module.css';
import { logoPic } from '../../../../Assets/iconLink';


export const Post = (props) => {
    return (
        <div className={style.post}>
            <div>
                <img src={logoPic} />
            </div>
            <div>
                {props.post}
            </div>
            <div>
                {props.likesCount + ' likes'}
            </div>
        </div>

    )
}