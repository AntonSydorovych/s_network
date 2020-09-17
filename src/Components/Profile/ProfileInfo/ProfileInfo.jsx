import React from 'react';
import styles from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader/Preloader';
import { mainPic } from '../../../Assets/iconLink';
import  StatusContainer  from './Status/StatusContainer';
import proger  from '../../../Assets/proger.jfif';

export const ProfileInfo = (props) => {

    if (!props.profileData) {
        return <Preloader />
    }

    return (
        <div>
            <img src={mainPic} />
            <div className={styles.describtion}>
                <div className = { styles.userInfo}>
                    <div className={styles.userAva} >
                        <img src={!props.profileData.photos.large ? proger : props.profileData.photos.large } />
                    </div>

                    <StatusContainer {...props} />

                    <div>{props.profileData.aboutMe}</div>
                    <div>{props.profileData.fullName}</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}