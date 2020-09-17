import React from 'react';
import style from './Profile.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
    
    return (
        <div className={style.content}>
            <ProfileInfo {...props} />
            <MyPostsContainer  />
        </div>
    )
}