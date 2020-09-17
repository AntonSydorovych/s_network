import React from 'react';
import style from './MyPosts.module.css';
import {formsAPI} from '../../api/FormsApi';
import { Post } from './Post/Post';
import {maxLengthOfMessage} from "../../utils/validators/validators";



export const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post post={p.postText} likesCount={p.likesCount} key={p.id} />)
    let  maxLength10 = maxLengthOfMessage(10);
  
    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
               <div className = {style.bold} > My posts </div>
           </div>
            <div className={style.newPost}>
                <formsAPI.post onSubmit = {props.addPost} maxLength10 = {maxLength10}  />
            </div>
            {postElements}
        </div>
    )
}